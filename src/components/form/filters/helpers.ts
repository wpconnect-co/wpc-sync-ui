import {
	FileTypes,
	FilterComparisonOption,
	FilterGroupProps,
	FilterOption,
	FilterProps, FilterPropsOperators,
	FiltersComparisonOptions, FiltersTexts, PeriodValue
} from "./Filters.types";
import {Collaborator, LinkToAnotherRecord} from "../../../types/airtable";
import {SelectOption} from "../select/Select.types";
import { getPeriodsOptions } from "./config";


export const updateFilterAt = (filters:(FilterProps|FilterGroupProps)[], index:number, newFilter:FilterProps|FilterGroupProps) => {
	return [...filters.slice(0, index), newFilter, ...filters.slice(index + 1)];
}

export const removeFilterAt = (filters:(FilterProps|FilterGroupProps)[], index:number) => {
	return [...filters.slice(0, index), ...filters.slice(index + 1)]
}

export const getFilterById = (airtableFilterOptions:FilterOption[], filterId:string) => {
	return airtableFilterOptions.find((fieldOption) => fieldOption.id === filterId);
}

export const getFilterTypeFiltersComparisonOptions = (filtersComparisonOptions:FiltersComparisonOptions, filterType:keyof FiltersComparisonOptions|undefined):FilterComparisonOption[] => {
	if (!filterType || !filtersComparisonOptions[filterType]) {
		return [];
	}
	return filtersComparisonOptions[filterType];
}

export const getComparisonOptionByOperator = (comparisonOptions:FilterComparisonOption[], operator:FilterPropsOperators) => {
	return comparisonOptions.find((comparisonOption) => comparisonOption.value === operator)
}

export const collaboratorToSelectOption = (collaborator:Collaborator):SelectOption => {
	return {
		value: collaborator.name,
		label: collaborator.name,
	}
}

export const isPeriodValue = (value:any): value is PeriodValue => {
	return typeof value === 'object' && ! ('mode' in value);
}

export const linkToAnotherRecordToSelectOption = (linkToAnotherRecord:LinkToAnotherRecord):SelectOption => {
	return {
		value: linkToAnotherRecord.id,
		label: linkToAnotherRecord.name,
	}
}

export const createCheckFilterProps = (texts:FiltersTexts, airtableFilterOptions:FilterOption[], filtersComparisonOptions:FiltersComparisonOptions) => {
	return (newFilterProps:FilterProps) => {
		const newFilter = getFilterById(airtableFilterOptions, newFilterProps.columnId);
		const newComparisonOptions = getFilterTypeFiltersComparisonOptions(filtersComparisonOptions, newFilter?.type);
		let newComparisonOptionValue = getComparisonOptionByOperator(newComparisonOptions, newFilterProps.operator);
		// If the operator is not available for the new filter, take the first one from the new list.
		if (!newComparisonOptionValue) {
			newComparisonOptionValue = newComparisonOptions[0];
			newFilterProps.operator = newComparisonOptionValue.value;
		}

		const newInputType = newComparisonOptionValue?.inputType;
		// Check if the period is available too.
		if ('period' === newInputType) {
			const newPeriodOptions = getPeriodsOptions(texts, newFilterProps.operator);
			const periodValue = !isPeriodValue(newFilterProps.value)
				? {numberOfDays: '', input: '', mode: Object.values(newPeriodOptions)[0].value}
				: newFilterProps.value as PeriodValue;
			const periodOption = newPeriodOptions[periodValue.mode];

			if (!periodOption || (periodOption.supportedOperators && periodOption.supportedOperators.indexOf(newFilterProps.operator) === -1)) {
				periodValue.mode = Object.values(newPeriodOptions)[0].value;
			}
			newFilterProps.value = periodValue;
		} else if ('multi_user' === newInputType) {
			if (!Array.isArray(newFilterProps.value)) {
				newFilterProps.value = [];
			}
		} else if ('multi_select' === newInputType) {
			if (!Array.isArray(newFilterProps.value)) {
				newFilterProps.value = [];
			}
		}  else if ('link_to_another_record' === newInputType) {
			if (!Array.isArray(newFilterProps.value)) {
				newFilterProps.value = [];
			}
		} else if ('filetype' === newInputType) {
			if (typeof newFilterProps.value !== 'string') {
				newFilterProps.value = '';
			}
			if (FilterPropsOperators.Filetype === newFilterProps.operator && !isFileType(newFilterProps.value)) {
				newFilterProps.value = 'image';
			}
		} else if (typeof newFilterProps.value !== 'string') {
			// If it's not a period, reset the value to an empty string.
			newFilterProps.value = '';
		}

		return newFilterProps;
	}
};
export const isFileType = (value:any): value is FileTypes => {
	return typeof value === 'string' && Object.values<string>(FileTypes).includes(value);
}
