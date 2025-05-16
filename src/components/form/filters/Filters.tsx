import {
	FetcherProps,
	FilterGroupInheritedProps,
	FilterGroupProps,
	FilterInheritedProps, FilterInputProps,
	FilterProps, FilterPropsOperators, InputSelectProps, LinkToAnotherRecordSelectProps,
	PeriodSelectProps, PeriodSelectValues, PeriodValue, UserSelectProps
} from "./Filters.types";
import "./Filters.css";
import {Button} from "../button";
import classnames from "classnames";
import Select, {SelectAsync} from "../select/Select";
import {ReactNode, useEffect, useId, useMemo, useState} from "react";
import Input, {InputType} from "../input/Input";
import CircleTrash from "../../graphics/icons/CircleTrash";
import {
	getFilterTypeFiltersComparisonOptions,
	getFilterById,
	updateFilterAt,
	removeFilterAt,
	getComparisonOptionByOperator,
	collaboratorToSelectOption,
	linkToAnotherRecordToSelectOption, createCheckFilterProps, isFileType
} from "./helpers";

import {Options} from "react-select";
import {SelectOption} from "../select/Select.types";
import {getFiltersComparisonOptions, getPeriodsOptions, getConjunctionOptions, getFileTypes} from "./config";
import SvgChecked from "../../graphics/icons/Checked";
/**
 * Filters. <br />
 * Filters based on Airtable's ones. Can be nested with groups (up to 3 levels). <br />
 *
 *
 * @constructor
 */
const Filters = ({
					 conjunction,
					 filters,
					 texts,
					 onChange,
					 airtableFilterOptions,
					 fetchFn
				 }: FilterGroupInheritedProps) => {
	const filtersComparisonOptions = getFiltersComparisonOptions(texts);
	return <div className="airwpsync-c-filters">
		<FiltersGroup
			{...{conjunction, filters, texts, onChange, airtableFilterOptions, filtersComparisonOptions, fetchFn}}
		/>
	</div>;
};


const FiltersGroup = ({
						  conjunction,
						  filters,
						  texts,
						  onChange,
						  airtableFilterOptions,
						  filtersComparisonOptions,
						  fetchFn,
						  depth = 0
					  }: FilterGroupInheritedProps) => {
	const firstFieldOption = airtableFilterOptions[0];
	const checkFilterProps = createCheckFilterProps(texts, airtableFilterOptions, filtersComparisonOptions);
	return <div className={classnames({
		'airwpsync-c-filters-group': true,
		'airwpsync-c-filters-group--alt': depth % 2 > 0,
	})}>
		{
			filters.length > 0 ?
				<div className="airwpsync-c-filters-group__filters">
					{
						filters.map((filterProps: FilterProps | FilterGroupProps, index: number) => {
							return renderFiltersGroupFilter(
								{
									conjunction,
									filters,
									texts,
									onChange,
									airtableFilterOptions,
									filtersComparisonOptions,
									depth,
									fetchFn
								},
								filterProps,
								index
							);
						})
					}
				</div>
				: null
		}
		{ /* Add filter btn */}
		<Button
			type="button"
			buttonType="secondary"
			onClick={() => {
				onChange({
					conjunction,
					filters: [...filters, checkFilterProps({
						operator: filtersComparisonOptions[firstFieldOption.type][0].value,
						columnId: firstFieldOption.id,
						columnName: firstFieldOption.name,
						value: ''
					}) as FilterProps]
				})
			}}
		>{texts.addFilterBtnText}</Button>
		{ /* Add filter group btn */}
		<Button
			type="button"
			buttonType="secondary"
			disabled={depth >= 2}
			title={depth >= 2 ? texts.maxNestedFilterGroupReached : ''}
			onClick={() => {
				onChange({
					conjunction,
					filters: [...filters, {conjunction: 'and', filters: []}]
				})
			}}
		>{texts.addFilterGroupBtnText}</Button>
	</div>;
};


const renderFiltersGroupFilter = (groupFilterProps: FilterGroupInheritedProps, filterProps: FilterProps | FilterGroupProps, index: number) => {
	const {
		conjunction,
		texts,
		onChange,
		filters,
		airtableFilterOptions,
		filtersComparisonOptions,
		fetchFn,
		depth = 0
	} = groupFilterProps;
	let conjunctionElement: string | ReactNode = texts[conjunction];
	if (0 === index) {
		conjunctionElement = texts.where;
	} else if (1 === index) {
		const conjunctionOptions = getConjunctionOptions(texts);
		conjunctionElement = <Select
			label={texts.conjunction}
			value={conjunctionOptions[conjunction]}
			options={Object.values(conjunctionOptions)}
			onChange={(newConjunction) => {
				onChange({
					filters,
					conjunction: newConjunction ? newConjunction.value as ('and' | 'or') : 'and'
				});
			}}
		/>
	}

	return <div key={index} className="airwpsync-c-filters-filter">
		<div className="airwpsync-c-filters-group__conjunction">{conjunctionElement}</div>
		{
			'conjunction' in filterProps ?
				<div className="airwpsync-c-filters-group__group">
					<FiltersGroup {...{
						...filterProps,
						texts,
						airtableFilterOptions,
						filtersComparisonOptions,
						fetchFn,
						onChange: (props) => {
							onChange({
								conjunction,
								filters: updateFilterAt(filters, index, props)
							});
						},
						depth: depth + 1,
					}} />
				</div>
				: <Filter {...{
					...filterProps,
					airtableFilterOptions,
					filtersComparisonOptions,
					texts,
					fetchFn,
					onChange: (props) => {
						onChange({
							conjunction,
							filters: updateFilterAt(filters, index, props)
						});
					},
					onRemove: () => {
						onChange({
							conjunction,
							filters: removeFilterAt(filters, index)
						});
					},
				}} />
		}
		<button
			type="button"
			className="airwpsync-c-filters-group__remove-btn airwpsync-u-reset-btn"
			onClick={() => {
				onChange({
					conjunction,
					filters: removeFilterAt(filters, index)
				});
			}}
		><CircleTrash/></button>
	</div>
}

const Filter = ({
					columnName,
					columnId,
					operator,
					value,
					airtableFilterOptions,
					filtersComparisonOptions,
					texts,
					fetchFn,
					onChange,
					onRemove
				}: FilterInheritedProps) => {
	const filterProps = {columnName, columnId, operator, value};
	const filterOptions = airtableFilterOptions.map(({id, name}) => ({value: id, label: name}));
	const filter = getFilterById(airtableFilterOptions, columnId);
	const fieldOptionValue = filterOptions.find((filterOption) => filterOption.value === columnId);
	const comparisonOptions = getFilterTypeFiltersComparisonOptions(filtersComparisonOptions, filter?.type);
	const comparisonOptionValue = getComparisonOptionByOperator(comparisonOptions, operator);
	const checkFilterProps = createCheckFilterProps(texts, airtableFilterOptions, filtersComparisonOptions);

	let inputType = comparisonOptionValue?.inputType;

	const children = [];

	// Add filters/fields select.
	children.push(
		<div key="filter-select-field" className="airwpsync-c-filters-filter__select-field">
			<Select
				label={''}
				options={filterOptions}
				placeholder={texts.selectFieldPlaceholder}
				value={fieldOptionValue}
				menuShouldScrollIntoView={false}
				onChange={(newValue) => {
					if (newValue) {
						const newFilter = getFilterById(airtableFilterOptions, newValue.value);
						if (newFilter) {
							const newFilterProps = {
								...filterProps,
								columnId: newFilter.id,
								columnName: newFilter.name,

							};

							onChange(checkFilterProps(newFilterProps));
						}
					}

				}}
			/>
		</div>
	);

	// Add comparisons select.
	children.push(
		<div key="filter-select-comparison" className="airwpsync-c-filters-filter__select-comparison">{
			comparisonOptions ?
				<Select
					label={''}
					options={comparisonOptions}
					placeholder={texts.selectComparisonPlaceholder}
					value={comparisonOptionValue}
					menuShouldScrollIntoView={false}
					onChange={(newValue) => {
						if (newValue) {
							onChange(checkFilterProps({
								...filterProps,
								operator: newValue.value as FilterPropsOperators,
							}));
						} else {
							onRemove();
						}

					}}
				></Select>
				: null
		}</div>
	);

	if ('period' === inputType && comparisonOptionValue) {
		children.push(
			<PeriodsSelect {...{
				texts,
				key: 'filter-select-period',
				periodValue: value as PeriodValue,
				operator: comparisonOptionValue.value,
				onChange: (newPeriodValue) => {
					onChange({
						...filterProps,
						value: newPeriodValue,
					});
				}
			}}/>
		)
	} else if (('user' === inputType || 'multi_user' === inputType) && (typeof value === 'string' || Array.isArray(value))) {
		children.push(
			<UserSelect
				key="filter-select-user"
				texts={texts}
				isMulti={'multi_user' === inputType}
				hideInput={!!comparisonOptionValue?.hideInput}
				value={value}
				fieldName={columnName}
				onChange={(newValue) => {
					onChange({
						...filterProps,
						value: newValue,
					});
				}}
				fetchFn={fetchFn}
			/>
		);
	} else if (('select' === inputType || 'multi_select' === inputType) && (Array.isArray(value) || typeof value === 'string')) {
		children.push(
			<InputSelect
				key="filter-input-select"
				texts={texts}
				options={(Array.isArray(filter?.options) ? filter?.options as SelectOption[] : [])}
				isMulti={'multi_select' === inputType}
				hideInput={!!comparisonOptionValue?.hideInput}
				value={value}
				onChange={(newValue) => {
					onChange({
						...filterProps,
						value: newValue,
					});
				}}
			/>
		);
	} else if ('link_to_another_record' === inputType && Array.isArray(value)) {
		children.push(
			<LinkToAnotherRecordSelect
				key="filter-select-link-to-another-record"
				texts={texts}
				hideInput={!!comparisonOptionValue?.hideInput}
				value={value}
				fieldName={columnName}
				onChange={(newValue) => {
					onChange({
						...filterProps,
						value: newValue,
					});
				}}
				fetchFn={fetchFn}
			/>
		);
	} else if ('filetype' === inputType && isFileType(value)) {
		const fileTypes = getFileTypes(texts);
		children.push(
			<div key="filter-filetype" className="airwpsync-c-filters-filter__select-filetype">
				<Select
					label={''}
					options={Object.values(fileTypes)}
					value={fileTypes[value]}
					onChange={(newValue) => {
						onChange({
							...filterProps,
							value: newValue ? newValue.value : '',
						});
					}}
				/>
			</div>
		);
	} else if ('checkbox' === inputType && typeof value === 'string') {
		children.push(
			<FilterInputCheckbox
				key="filter-input-checkbox"
				texts={texts}
				value={value}
				hideInput={!!comparisonOptionValue?.hideInput}
				onChange={(newValue: string) => {
					onChange({
						...filterProps,
						value: newValue
					});
				}}
			/>
		);
	} else {
		children.push(
			<FilterInput
				key="filter-input"
				texts={texts}
				inputType={inputType as InputType}
				value={value as string}
				hideInput={!!comparisonOptionValue?.hideInput}
				onChange={(newValue: string) => {
					onChange({
						...filterProps,
						value: newValue
					});
				}}
			/>
		);
	}

	return <>{children}</>;
}

const PeriodsSelect = ({texts, periodValue, operator, onChange}: PeriodSelectProps) => {
	const periodOptions = useMemo(() => {
		return getPeriodsOptions(texts, operator);
	}, [texts, operator]);
	const periodOption = periodOptions[periodValue.mode];

	const inputPropName = periodOption.inputType === 'number' ? 'numberOfDays' : 'input';

	return <>
		<div className="airwpsync-c-filters-filter__select-period">
			<div>
				<Select
					label={''}
					options={Object.values(periodOptions)}
					placeholder={texts.selectComparisonPlaceholder}
					value={periodOptions[periodValue.mode] ?? undefined}
					menuShouldScrollIntoView={false}
					onChange={(newValue) => {
						if (newValue) {
							onChange({
								...periodValue,
								mode: newValue.value as PeriodSelectValues
							});
						}
					}}
				></Select>
			</div>
			<FilterInput
				texts={texts}
				inputType={periodOption.inputType as InputType}
				value={(periodValue[inputPropName] ?? '').toString()}
				hideInput={!!periodOption?.hideInput}
				onChange={(newValue: string) => {
					onChange({
						...periodValue,
						[inputPropName]: newValue
					});
				}}
			/>
		</div>
	</>;
}

const UserSelect = ({
						texts,
						value,
						fieldName,
						hideInput,
						fetchFn,
						onChange,
						isMulti = false
					}: UserSelectProps & FetcherProps) => {
	const [optionsValue, setOptionsValue] = useState<boolean | SelectOption[]>(false);
	const [defaultOptions, setDefaultOptions] = useState<SelectOption[]>([]);
	const flatValues = Array.isArray(optionsValue) ? optionsValue.map((option) => option.value).join('|') : false;

	useEffect(() => {
		if ((Array.isArray(value) && value.join('|') === flatValues) || (value === flatValues)) {
			return;
		}

		if (value.length === 0) {
			setOptionsValue([]);
			return;
		}
		const formData = new FormData();
		formData.set('field_name', fieldName);
		if (Array.isArray(value)) {
			value.forEach((id) => {
				formData.append('search[]', id);
			})
		} else {
			formData.set('search', value);
		}
		fetchFn('airtable-search-users', formData).then((result) => {
			if (!result.success || !result.data || !('map' in result.data) || result.data.length === 0) {
				if (!result.success || !result.data || !('map' in result.data)) {
					console.error('fetchFn airtable-search-users', result);
				}
				setOptionsValue([]);
				return;
			}
			const initialValue = result.data.map(collaboratorToSelectOption);
			setDefaultOptions(initialValue);
			setOptionsValue(initialValue);
		});
	}, [value, fetchFn, flatValues, fieldName]);

	let result = null;
	if (!hideInput && Array.isArray(optionsValue)) {
		result = <SelectAsync
			label={''}
			value={isMulti ? optionsValue : optionsValue[0]}
			defaultOptions={defaultOptions}
			isMulti={isMulti}
			isClearable={true}
			isSearchable={true}
			onChange={(newValue) => {
				if (isMulti) {
					onChange(Array.isArray(newValue) ? newValue.map((option) => option.value) : []);
					setOptionsValue(Array.isArray(newValue) ? newValue : []);
				} else {
					const isOption = newValue !== null && typeof newValue === 'object' && 'value' in newValue;
					onChange(isOption ? (newValue as SelectOption).value : '');
					setOptionsValue(isOption ? [newValue as SelectOption] : []);
				}
			}}
			loadOptions={(inputValue, callback) => {
				const formData = new FormData();
				formData.set('field_name', fieldName);
				formData.set('search', inputValue);
				fetchFn('airtable-search-users', formData).then(
					(result) => {
						if (!result.success || !result.data || !('map' in result.data)) {
							return;
						}
						const options: Options<any> = result.data.map(collaboratorToSelectOption);
						callback(
							options
						);
					}
				)
			}}
		/>
	} else if (!hideInput && !Array.isArray(optionsValue)) {
		console.error('UserSelect: optionsValue should be an array', optionsValue);
	}
	return <div className="airwpsync-c-filters-filter__select-user"> {
		result
	}</div>
}


const LinkToAnotherRecordSelect = ({
									   texts,
									   value,
									   fieldName,
									   hideInput,
									   fetchFn,
									   onChange
								   }: LinkToAnotherRecordSelectProps & FetcherProps) => {
	const [optionsValue, setOptionsValue] = useState<boolean | SelectOption[]>(false);
	const [defaultOptions, setDefaultOptions] = useState<SelectOption[]>([]);
	const flatValues = Array.isArray(optionsValue) ? optionsValue.map((option) => option.value).join('|') : false;
	useEffect(() => {
		if (value.join('|') === flatValues) {
			return;
		}

		if (value.length === 0) {
			setOptionsValue([]);
			return;
		}
		const formData = new FormData();
		formData.set('field_name', fieldName);
		if (Array.isArray(value)) {
			value.forEach((id) => {
				formData.append('search[]', id);
			})
		} else {
			formData.set('search', value);
		}

		fetchFn('airtable-search-records', formData).then((result) => {
			if (!result.success || !result.data || !('map' in result.data) || result.data.length === 0) {
				setOptionsValue([]);
				return;
			}
			const initialValue = result.data.map(linkToAnotherRecordToSelectOption);
			setDefaultOptions(initialValue);
			setOptionsValue(initialValue);
		});
	}, [value, fetchFn, flatValues]);

	let result = null;
	if (!hideInput && Array.isArray(optionsValue)) {
		result = <SelectAsync
			label={''}
			value={optionsValue}
			defaultOptions={defaultOptions}
			isMulti={true}
			isClearable={true}
			isSearchable={true}
			onChange={(newValue) => {
				onChange(Array.isArray(newValue) ? newValue.map((option) => option.value) : []);
				setOptionsValue(Array.isArray(newValue) ? newValue : []);
			}}
			loadOptions={(inputValue, callback) => {
				const formData = new FormData();
				formData.set('field_name', fieldName);
				formData.set('search', inputValue);
				fetchFn('airtable-search-records', formData).then(
					(result) => {
						if (!result.success || !result.data || !('map' in result.data)) {
							return;
						}
						const options: Options<any> = result.data.map(collaboratorToSelectOption);
						callback(
							options
						);
					}
				)
			}}
		/>
	}
	return <div className="airwpsync-c-filters-filter__select-link-to-another-record"> {
		result
	}</div>
}

const InputSelect = ({texts, value, options, isMulti, onChange}: InputSelectProps) => {
	const optionSelected = isMulti ?
		options.filter((option) => value.indexOf(option.value) > -1)
		: options.find((option) => option.value === value);

	return <>
		<div className="airwpsync-c-filters-filter__select">
			<div>
				<Select
					label={''}
					options={options}
					isMulti={isMulti}
					placeholder={texts.inputValuePlaceholder}
					value={optionSelected}
					menuShouldScrollIntoView={false}
					onChange={(newValue) => {
						if (newValue) {
							onChange(
								Array.isArray(newValue) ?
									newValue.map((option) => option.value)
									// @ts-ignore
									: newValue.value
							);
						} else {
							onChange(isMulti ? [] : '');
						}
					}}
				></Select>
			</div>
		</div>
	</>;
}

const FilterInputCheckbox = ({texts, hideInput, value, onChange}: FilterInputProps) => {
	const id = useId();
	return <div className="airwpsync-c-filters-filter__select-value airwpsync-c-filters-filter__select-value--checkbox">{
		hideInput ?
			null
			: <>
				<input
					id={id}
					className="airwpsync-c-filters-filter__select-value-checkbox"
					placeholder={texts.inputValuePlaceholder}
					value="1"
					checked={'1' === value}
					type="checkbox"
					onChange={(event) => {
						onChange(event.target.checked ? '1' : '0');
					}}
				/><label htmlFor={ id }>
					<SvgChecked />
					<span className="screen-reader-text">{texts.checked}</span>
				</label>
			</>
	}</div>
}

const FilterInput = ({texts, hideInput, value, inputType, onChange}: FilterInputProps) => {
	return <div className="airwpsync-c-filters-filter__select-value">{
		hideInput ?
			null
			: <Input
				label={''}
				placeholder={texts.inputValuePlaceholder}
				value={value}
				type={inputType}
				onChange={(event) => {
					onChange(event.target.value);
				}}
			/>
	}</div>
}

export default Filters;
