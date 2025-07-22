import React from "react";
import {MappingRowReversedProps} from "./MappingRowReversed.types";
import {MappingOption, FormOptionsValues} from "../../../models/mapping/Mapping.types";
import Select from "../select/Select";
import { SelectOption, GroupOption } from "../select/Select.types";
import "./MappingRowReversed.css";
import {CircleTrash, Grab} from "../../graphics";
import Input from "../input/Input";
import FormRow from "../form-row/FormRow";

/**
 * MappingRowReversed <br />
 * Manage mapping from WordPress fields to Airtable ones <br />
 * Use a template to auto Airtable field option
 *
 * @param {MappingRowReversedTexts} texts Texts
 * @param {number} index Row index.
 * @param {string} airtableFieldId Airtable field id
 * @param {string} wordPressFieldId WordPress field id
 * @param {FieldOptions} fieldOptions Field's options
 * @param {React.ReactNode} error Error
 * @param {MappingManagerReversed} mappingManager Mapping manager
 * @param {string} className Class name
 * @param {object} ...props Other props for <tr> HTML element.
 * @constructor
 */
export default function MappingRowReversed({ texts, index, airtableFieldId, wordPressFieldId, fieldOptions, error, mappingManager, className = '', ...props }:MappingRowReversedProps) {

	const airtableFieldDisabled = Object.keys(mappingManager.airtableSelectFieldGroupsOptions).length === 0; // || loadingDatabasesAndPages;
	let wordPressFieldConfig = {} as MappingOption;
	if (wordPressFieldId) {
		wordPressFieldConfig = mappingManager.getWordPressFieldById(wordPressFieldId) ?? {};
	}
	const airtableFieldChangedHandler = (newValue:{ value: string, label: string }) => {
		mappingManager.updateAirtableField(index, newValue ? newValue.value : '')
	};

	const wordPressFieldChangedHandler = (newValue:{ value: string, label: string }) => {
		mappingManager.updateWordPressField(index, newValue ? newValue.value : '');
	};

	const customFieldOptionChangedHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const target = e?.target as HTMLInputElement;
		mappingManager.updateFieldOption(index, 'name', target.value);
	};

	const fieldFormOptionChangedHandler = (formOptionsValues:FormOptionsValues, fieldType:string, fieldName:string) => (e:React.ChangeEvent<HTMLInputElement>) => {
		let value:string|number = e.target.value;
		if ('checkbox' === fieldType) {
			value = e.target.checked ? 1 : 0;
		}
		mappingManager.updateFieldOption(index, 'form_options_values', {
			...formOptionsValues,
			[fieldName]: value
		});
	};

	const removeMappingRowHandler = () => {
		mappingManager.removeMappingRow(index)
	};

	let selectedWordPressOption:string|SelectOption = '';
	const wordPressOptions = Object.keys(mappingManager.wordPressSelectFieldsOptions).map((groupKey) => {
		const group = mappingManager.wordPressSelectFieldsOptions[groupKey];
		return {
			label: group.label,
			options: group.options.map(({ value, label, enabled }) => {
				const option:SelectOption = { value, label, isDisabled: !enabled };
				if (wordPressFieldId === option.value) {
					selectedWordPressOption = option;
				}
				return option;
			})
		} as GroupOption;
	});

	let selectedAirtableField:string|SelectOption = '';
	const airtableOptions = Object.keys(mappingManager.airtableSelectFieldGroupsOptions[index]).map((groupKey) => {
		const group = mappingManager.airtableSelectFieldGroupsOptions[index][groupKey];
		const groupLabel = group.label ?? texts.fields;
		return {
			label: groupLabel,
			options: group.options.map((field) => {
				const option = { value: field.id, label: field.name, isDisabled: 'enabled' in field && !field.enabled } as SelectOption;
				if (option.value === airtableFieldId) {
					selectedAirtableField = option
				}
				return option;
			})
		} as GroupOption;
	})

	const renderCustomFieldOptions = () => {
		return <FormRow className="airwpsync-c-mapping-row-reversed__custom-field">
			<Input
				label={ texts.custom_field }
				labelHidden={ true }
				placeholder={ texts.custom_field }
				value={ fieldOptions.name ?? '' }
				onChange={ customFieldOptionChangedHandler }
			/>
		</FormRow>;
	};

	const renderFieldFormOptions = () => {
		if (!wordPressFieldConfig.form_options) {
			return null;
		}
		return wordPressFieldConfig.form_options.map(function (formOption) {
			const form_option_id = `field_form_option_` + airtableFieldId + '_' + formOption.name;
			const value = fieldOptions.form_options_values && fieldOptions.form_options_values[formOption.name] ? fieldOptions.form_options_values[formOption.name] : '';
			const inputAttributes = {
				id: form_option_id,
				value,
				type: formOption.type,
				name: form_option_id,
				className: 'regular-text ltr',
				onChange: fieldFormOptionChangedHandler(fieldOptions.form_options_values || {} as FormOptionsValues, formOption.type, formOption.name),
			};
			return <div key={form_option_id} className="notionwpsync-field">
				<label htmlFor={form_option_id}>
					{
						formOption.type === 'checkbox' ?
							<input
								{...inputAttributes}
								{
									...{
										className: '',
										value: 1,
										style: {
											display: 'inline-block',
											width: '1em',
											verticalAlign: 'middle',
											marginRight: '0.5em',
										},
										checked: !!value
									}
								}
							/>
							: null
					}
					<span>{formOption.label}</span>
				</label>
				{
					formOption.type !== 'checkbox' ?
						<input {...inputAttributes} />
						: null
				}
			</div>;
		})
	}

	return <tr className={`airwpsync-c-mapping-row-reversed ${className}`} {...props}>
		<td className="airwpsync-c-mapping-row-reversed__wordpress-field-col">
			<div className="airwpsync-c-mapping-row-reversed__wordpress-field">
				<div
					className="airwpsync-c-mapping-row-reversed__btn-sort airwpsync-u-reset-btn"
				>
					<span className="screen-reader-text">{texts.sort}</span>
					<Grab/>
				</div>
				<Select
					label={texts.wordpress_field_placeholder}
					labelHidden={true}
					value={selectedWordPressOption}
					// @ts-ignore
					onChange={wordPressFieldChangedHandler}
					// @ts-ignore
					options={wordPressOptions}
					placeholder={texts.wordpress_field_placeholder}
				/>
				{wordPressFieldConfig.notice ? <small>{wordPressFieldConfig.notice}</small> : null}
				{wordPressFieldId && wordPressFieldId.split('::')[1] === 'custom_field' ? renderCustomFieldOptions() : null}
				{wordPressFieldConfig.form_options ? renderFieldFormOptions() : null}
			</div>
		</td>
		<td className="airwpsync-c-mapping-row-reversed__assigned-to">
			{texts.assigned_to}
		</td>
		<td className="airwpsync-c-mapping-row-reversed__airtable-field-col">
			{ /* @TODO: check airtableFieldDisabled */ }
			<Select
				label={''}
				value={ selectedAirtableField }
				// @ts-ignore
				onChange={ airtableFieldChangedHandler }
				// @ts-ignore
				options={ airtableOptions }
				/>
			{error ? <div className="airwpsync-c-mapping-row-reversed__error">{ error }</div> : null }
		</td>

		<td className="airwpsync-c-mapping-row-reversed__flex">

			<button
				className="airwpsync-c-mapping-row-reversed__remove-btn airwpsync-u-reset-btn"
				type="button"
				onClick={removeMappingRowHandler}
			>
				<span className="screen-reader-text">{texts.remove}</span>
				<CircleTrash />
			</button>
		</td>
	</tr>;
}
