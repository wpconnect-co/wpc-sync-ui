import {
	FileTypes,
	FilterPropsOperators,
	FiltersComparisonOptions,
	FiltersTexts,
	PeriodOption,
	PeriodSelectValues
} from "./Filters.types";
import {InputType} from "../input/Input";
import {SelectOption} from "../select/Select.types";

export const getFiltersComparisonOptions = (texts:FiltersTexts):FiltersComparisonOptions => {
	return {
		'string': [
			{ value: FilterPropsOperators.Contains, label: texts.compare.contains },
			{ value: FilterPropsOperators.DoesNotContain, label: texts.compare.does_not_contains },
			{ value: FilterPropsOperators.Is, label: texts.compare.is },
			{ value: FilterPropsOperators.IsNot, label: texts.compare.is_not },
			{ value: FilterPropsOperators.IsEmpty, label: texts.compare.is_empty, hideInput: true },
			{ value: FilterPropsOperators.IsNotEmpty, label: texts.compare.is_not_empty, hideInput: true,  },
		],
		'number': [
			{ value: FilterPropsOperators.Is, label: '=', inputType: InputType.Number },
			{ value: FilterPropsOperators.IsNot, label: '≠', inputType: InputType.Number },
			{ value: FilterPropsOperators.LesserThan, label: '<', inputType: InputType.Number },
			{ value: FilterPropsOperators.GreaterThan, label: '>', inputType: InputType.Number },
			{ value: FilterPropsOperators.LesserOrEqualThan, label: '≤', inputType: InputType.Number },
			{ value: FilterPropsOperators.GreaterOrEqualThan, label: '≥', inputType: InputType.Number },
			{ value: FilterPropsOperators.IsEmpty, label: texts.compare.is_empty, hideInput: true },
			{ value: FilterPropsOperators.IsNotEmpty, label: texts.compare.is_not_empty, hideInput: true,  },
		],
		'date': [
			{ value: FilterPropsOperators.Is, label: texts.compare.is, inputType: 'period' },
			{ value: FilterPropsOperators.IsWithin, label: texts.compare.is_within, inputType: 'period' },
			{ value: FilterPropsOperators.LesserThan, label: texts.compare.is_before, inputType: 'period' },
			{ value: FilterPropsOperators.GreaterThan, label: texts.compare.is_after, inputType: 'period' },
			{ value: FilterPropsOperators.LesserOrEqualThan, label: texts.compare.is_on_or_before, inputType: 'period' },
			{ value: FilterPropsOperators.GreaterOrEqualThan, label: texts.compare.is_on_or_after, inputType: 'period' },
			{ value: FilterPropsOperators.IsNot, label: texts.compare.is_not, inputType: 'period' },
		],
		'user': [
			{ value: FilterPropsOperators.Is, label: texts.compare.is, inputType: 'user' },
			{ value: FilterPropsOperators.IsNot, label: texts.compare.is_not, inputType: 'user' },
			{ value: FilterPropsOperators.IsAnyOf, label: texts.compare.is_any_of, inputType: 'multi_user' },
			{ value: FilterPropsOperators.IsNoneOf, label: texts.compare.is_none_of, inputType: 'multi_user' },
			{ value: FilterPropsOperators.IsEmpty, label: texts.compare.is_empty, hideInput: true },
			{ value: FilterPropsOperators.IsNotEmpty, label: texts.compare.is_not_empty, hideInput: true },
		],
		'select': [
			{ value: FilterPropsOperators.Is, label: texts.compare.is, inputType: 'select' },
			{ value: FilterPropsOperators.IsNot, label: texts.compare.is, inputType: 'select' },
			{ value: FilterPropsOperators.IsAnyOf, label: texts.compare.is_any_of, inputType: 'multi_select' },
			{ value: FilterPropsOperators.IsNoneOf, label: texts.compare.is_none_of, inputType: 'multi_select' },
			{ value: FilterPropsOperators.IsEmpty, label: texts.compare.is_empty, hideInput: true },
			{ value: FilterPropsOperators.IsNotEmpty, label: texts.compare.is_not_empty, hideInput: true },
		],
		'multi_select': [
			{ value: FilterPropsOperators.HasAnyOf, label: texts.compare.has_any_of, inputType: 'multi_select' },
			{ value: FilterPropsOperators.HasAllOf, label: texts.compare.has_all_of, inputType: 'multi_select' },
			{ value: FilterPropsOperators.Is, label: texts.compare.is_exactly, inputType: 'multi_select' },
			{ value: FilterPropsOperators.HasNoneOf, label: texts.compare.has_none_of, inputType: 'multi_select' },
			{ value: FilterPropsOperators.IsEmpty, label: texts.compare.is_empty, hideInput: true },
			{ value: FilterPropsOperators.IsNotEmpty, label: texts.compare.is_not_empty, hideInput: true },
		],
		'link_to_another_record': [
			{ value: FilterPropsOperators.HasAnyOf, label: texts.compare.has_any_of, inputType: 'link_to_another_record' },
			{ value: FilterPropsOperators.HasAllOf, label: texts.compare.has_all_of, inputType: 'link_to_another_record' },
			{ value: FilterPropsOperators.Is, label: texts.compare.is_exactly, inputType: 'link_to_another_record' },
			{ value: FilterPropsOperators.IsNoneOf, label: texts.compare.has_none_of, inputType: 'link_to_another_record' },
			{ value: FilterPropsOperators.Contains, label: texts.compare.contains },
			{ value: FilterPropsOperators.DoesNotContain, label: texts.compare.does_not_contains },
			{ value: FilterPropsOperators.IsEmpty, label: texts.compare.is_empty, hideInput: true },
			{ value: FilterPropsOperators.IsNotEmpty, label: texts.compare.is_not_empty, hideInput: true },
		],
		'attachment': [
			{ value: FilterPropsOperators.Filename, label: texts.compare.filenames_contains },
			// We can't search by file type right now with the formula filter
			//{ value: FilterPropsOperators.Filetype, label: texts.compare.has_file_type, inputType: 'filetype' },
			{ value: FilterPropsOperators.IsEmpty, label: texts.compare.is_empty, hideInput: true },
			{ value: FilterPropsOperators.IsNotEmpty, label: texts.compare.is_not_empty, hideInput: true },
		],
		'checkbox': [
			{ value: FilterPropsOperators.Is, label: texts.compare.is, inputType: 'checkbox' },
		]
	}
};

const specificDateOperator = [ FilterPropsOperators.Is, FilterPropsOperators.LesserThan, FilterPropsOperators.GreaterThan, FilterPropsOperators.LesserOrEqualThan, FilterPropsOperators.GreaterOrEqualThan, FilterPropsOperators.IsNot ];
const rangeDateOperator = [ FilterPropsOperators.IsWithin ];
export const getPeriodsOptions = (texts:FiltersTexts, operator:FilterPropsOperators):Record<PeriodSelectValues, PeriodOption> => {
	const periodOptions = [
		{
			value: PeriodSelectValues.PastWeek,
			label: texts.periods.past_week,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.PastMonth,
			label: texts.periods.past_month,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.PastYear,
			label: texts.periods.past_year,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.NextWeek,
			label: texts.periods.next_week,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.NextMonth,
			label: texts.periods.next_month,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.NextYear,
			label: texts.periods.next_year,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.CalendarWeek,
			label: texts.periods.calendar_week,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.CalendarMonth,
			label: texts.periods.calendar_month,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.CalendarYear,
			label: texts.periods.calendar_year,
			hideInput: true,
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.NextNumberOfDays,
			label: texts.periods.next_number_of_days,
			inputType: 'number',
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.PastNumberOfDays,
			label: texts.periods.past_number_of_days,
			inputType: 'number',
			supportedOperators: rangeDateOperator
		},
		{
			value: PeriodSelectValues.ExactDate,
			label: texts.periods.exact_date,
			inputType: 'date',
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.Today,
			label: texts.periods.today,
			hideInput: true,
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.Tomorrow,
			label: texts.periods.tomorrow,
			hideInput: true,
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.Yesterday,
			label: texts.periods.yesterday,
			hideInput: true,
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.OneWeekAgo,
			label: texts.periods.one_week_ago,
			hideInput: true,
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.OneWeekFromNow,
			label: texts.periods.one_week_from_now,
			hideInput: true,
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.OneMonthAgo,
			label: texts.periods.one_month_ago,
			hideInput: true,
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.OneMonthFromNow,
			label: texts.periods.one_month_from_now,
			hideInput: true,
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.DaysAgo,
			label: texts.periods.number_of_days_ago,
			inputType: 'number',
			supportedOperators: specificDateOperator
		},
		{
			value: PeriodSelectValues.DaysFromNow,
			label: texts.periods.number_of_days_from_now,
			inputType: 'number',
			supportedOperators: specificDateOperator
		}

	];

	const filteredPeriodOptions = Object.values(periodOptions).filter((periodOption) => {
		return !periodOption.supportedOperators || periodOption.supportedOperators.indexOf(operator) > -1;
	});

	return filteredPeriodOptions.reduce((carry, periodOption) => {
		carry[periodOption.value] = periodOption as PeriodOption;
		return carry;
	}, {} as Record<PeriodSelectValues, PeriodOption>);
};

export const getConjunctionOptions = (texts:FiltersTexts) => ({
	and: { value: 'and', label: texts.and },
	or: { value: 'or', label: texts.or }
});


export const getFileTypes = (texts:FiltersTexts): Record<FileTypes, SelectOption> => ({
	[FileTypes.Image]: { value: 'image', label: texts.file_types.image } as SelectOption,
	[FileTypes.Text]: { value: 'text', label: texts.file_types.text } as SelectOption
});
