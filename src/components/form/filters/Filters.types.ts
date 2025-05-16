import {SelectOption} from "../select/Select.types";
import {InputType} from "../input/Input";
import {FetchJsonResult} from "../../../types/air-wp-sync";

export interface FetcherProps {
	fetchFn: (key:string, formData:FormData) => Promise<FetchJsonResult>
}

export interface FilterGroupProps {
	conjunction: 'and' | 'or';
	filters: (FilterProps|FilterGroupProps)[];
}

export interface FiltersTexts {
	addFilterBtnText: string;
	addFilterGroupBtnText: string;
	where: string;
	and: string;
	or: string;
	conjunction: string;
	maxNestedFilterGroupReached: string;
	checked: string,
	compare: {
		contains: string;
		does_not_contains: string;
		is: string;
		is_not: string;
		is_empty: string;
		is_not_empty: string;
		is_within: string;
		is_before: string;
		is_after: string;
		is_on_or_before: string;
		is_on_or_after: string;
		is_any_of: string;
		is_none_of: string;
		has_any_of: string;
		has_all_of: string;
		is_exactly: string;
		has_none_of: string;
		filenames_contains: string;
		has_file_type: string;
	},
	selectFieldPlaceholder: string;
	selectComparisonPlaceholder: string;
	inputValuePlaceholder: string;
	periods: {
		past_week: string;
		past_month: string;
		past_year: string;
		next_week: string;
		next_month: string;
		next_year: string;
		calendar_week: string;
		calendar_month: string;
		calendar_year: string;
		next_number_of_days: string;
		past_number_of_days: string;
		exact_date: string;
		today: string;
		tomorrow: string;
		yesterday: string;
		one_week_ago: string;
		one_week_from_now: string;
		one_month_ago: string;
		one_month_from_now: string;
		number_of_days_ago: string;
		number_of_days_from_now: string;
	},
	file_types: {
		image: string;
		text: string;
	}
}

export interface FilterGroupInheritedProps extends FilterGroupProps, FetcherProps {
	texts: FiltersTexts;
	depth?: number;
	onChange: (props:FilterGroupProps) => void;
	airtableFilterOptions: FilterOption[];
	filtersComparisonOptions: FiltersComparisonOptions;
}
export enum FilterPropsOperators {
	GreaterThan = '>',
	Is = '=',
	IsNot = '!=',
	GreaterOrEqualThan = '>=',
	LesserThan = '<',
	LesserOrEqualThan = '<=',
	Contains = 'contains',
	DoesNotContain = 'doesNotContain',
	IsEmpty = 'isEmpty',
	IsNotEmpty = 'isNotEmpty',
	IsWithin = 'isWithin',
	IsAnyOf = 'isAnyOf',
	IsNoneOf = 'isNoneOf',
	HasAnyOf = '|',
	HasAllOf = '&',
	HasNoneOf = 'hasNoneOf',
	Filename = 'filename',
	Filetype = 'filetype',

}

export interface FilterProps {
	columnId: string;
	columnName: string;
	operator: FilterPropsOperators;
	value: string | string[] | PeriodValue;
}
export interface FilterInheritedProps extends FilterProps, FetcherProps {
	airtableFilterOptions: FilterOption[];
	filtersComparisonOptions: FiltersComparisonOptions;
	texts: FiltersTexts;
	onChange: (props:FilterProps) => void;
	onRemove: () => void;
}
export interface FilterOption {
	name: string;
	id: string;
	type: keyof FiltersComparisonOptions,
	options?: SelectOption[]
}

export interface FilterComparisonOption extends SelectOption {
	value: FilterPropsOperators,
	hideInput?: boolean;
	inputType?: InputType | 'period' | 'user' | 'multi_user' | 'select' | 'multi_select' | 'link_to_another_record' | 'filetype' | 'checkbox'
}

export interface FiltersComparisonOptions {
	string: FilterComparisonOption[];
	number: FilterComparisonOption[];
	date: FilterComparisonOption[];
	user: FilterComparisonOption[];
	select: FilterComparisonOption[];
	multi_select: FilterComparisonOption[];
	link_to_another_record: FilterComparisonOption[];
	attachment: FilterComparisonOption[];
	checkbox: FilterComparisonOption[];
}

export interface PeriodSelectProps {
	texts: FiltersTexts;
	periodValue: PeriodValue;
	operator: FilterPropsOperators,
	onChange: (value:PeriodValue) => void;
}
export interface PeriodOption extends SelectOption {
	value: PeriodSelectValues,
	hideInput?: boolean;
	inputType?: 'number' | 'date';
	supportedOperators?: FilterPropsOperators[]
}
export enum PeriodSelectValues {
	PastWeek = 'pastWeek',
	PastMonth = 'pastMonth',
	PastYear = 'pastYear',
	NextWeek = 'nextWeek',
	NextMonth = 'nextMonth',
	NextYear = 'nextYear',
	CalendarWeek = 'calendarWeek',
	CalendarMonth = 'calendarMonth',
	CalendarYear = 'calendarYear',
	NextNumberOfDays = 'nextNumberOfDays',
	PastNumberOfDays = 'pastNumberOfDays',
	ExactDate = 'exactDate',
	Today = 'today',
	Tomorrow = 'tomorrow',
	Yesterday = 'yesterday',
	OneWeekAgo = 'oneWeekAgo',
	OneWeekFromNow = 'oneWeekFromNow',
	OneMonthAgo = 'oneMonthAgo',
	OneMonthFromNow = 'oneMonthFromNow',
	DaysAgo = 'daysAgo',
	DaysFromNow = 'daysFromNow',
}
export interface PeriodValue {
	mode: PeriodSelectValues,
	numberOfDays?: string,
	input?: string,
}

export interface FilterInputProps {
	texts:FiltersTexts,
	hideInput:boolean,
	value:string,
	inputType?: InputType,
	onChange: (newValue:string) => void
}

export interface UserSelectProps {
	texts:FiltersTexts,
	hideInput:boolean,
	value:string|string[],
	onChange: (newValue:string|string[]) => void,
	isMulti: boolean,
	fieldName: string,
}
export interface LinkToAnotherRecordSelectProps {
	texts:FiltersTexts,
	hideInput:boolean,
	value:string[],
	fieldName: string,
	onChange: (newValue:string|string[]) => void,
}

export interface InputSelectProps {
	texts:FiltersTexts,
	hideInput:boolean,
	value:string|string[],
	options: SelectOption[],
	onChange: (newValue:string|string[]) => void,
	isMulti: boolean,
}

export enum FileTypes {
	Image = 'image',
	Text = 'text',
}
