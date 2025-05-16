import { Meta } from "@storybook/react";
import Filters from "./Filters";
import {useState} from "react";
import {FilterGroupProps, FilterPropsOperators} from "./Filters.types";
import Spacer from "../../layout/spacer/Spacer";
import Paragraph from "../../content/paragraph/Paragraph";

const meta: Meta<typeof Filters> =  {
    title: "AirWPSyncUI/Form/Filters",
    component: Filters,
	decorators: (Story) => {
		return <>
			<Spacer size={32} />
			<Story />
			<Spacer size={32} />
			<Paragraph fontSize="sm">Users: you can search for "Taurand Stéphane", "Teresa Montgomery" and "Jeremy Lawson".</Paragraph>
			<Paragraph fontSize="sm">Link to another record: you can search for "Record 1", "Record 2" and "Record 3".</Paragraph>
			<Spacer size={64} />
		</>
	},
	args: {
		texts: {
			addFilterBtnText: '+ Add Filter',
			addFilterGroupBtnText: '+ Add Filter Group',
			where: 'Where',
			and: 'And',
			or: 'Or',
			conjunction: 'Conjunction',
			maxNestedFilterGroupReached: 'Filter conditions can only be nested 3 levels deep',
			checked: 'Checked',
			compare: {
				contains: 'contains...',
				does_not_contains: 'does not contain...',
				is: 'is...',
				is_not: 'is not... ',
				is_empty: 'is empty',
				is_not_empty: 'is not empty',
				is_within: 'is within...',
				is_before: 'is before...',
				is_after: 'is after...',
				is_on_or_before: 'is on or before...',
				is_on_or_after: 'is on or after...',
				is_any_of: 'is any of...',
				is_none_of: 'is none of...',
				has_any_of: 'has any of...',
				has_all_of: 'has all of...',
				is_exactly: 'is exactly...',
				has_none_of: 'has none of...',
				filenames_contains: 'filenames contains...',
				has_file_type: 'has file type...',
			},
			selectFieldPlaceholder: 'Choose the field',
			selectComparisonPlaceholder: 'Choose the condition',
			inputValuePlaceholder: 'Set the value',
			periods: {
				past_week: 'the past week',
				past_month: 'the past month',
				past_year: 'the past year',
				next_week: 'the next week',
				next_month: 'the next month',
				next_year: 'the next year',
				calendar_week: 'this calendar week',
				calendar_month: 'this calendar month',
				calendar_year: 'this calendar year',
				next_number_of_days: 'the next number of days...',
				past_number_of_days: 'the past number of days...',
				exact_date: 'exact date...',
				today: 'today',
				tomorrow: 'tomorrow',
				yesterday: 'yesterday',
				one_week_ago: 'one week ago',
				one_week_from_now: 'one week from now',
				one_month_ago: 'one month ago',
				one_month_from_now: 'one month from now',
				number_of_days_ago: 'number of days ago...',
				number_of_days_from_now: 'number of days from now...',
			},
			file_types: {
				image: 'image',
				text: 'text'
			}
		},
		airtableFilterOptions: [
			{ id: 'kmKvd123', name: 'Name', type: 'string' },
			{ id: 'kmKvd124', name: 'Category', type: 'string' },
			{ id: 'kmKvd125', name: 'Age', type: 'number' },
			{ id: 'kmKvd126', name: 'Created time', type: 'date' },
			{ id: 'kmKvd127', name: 'Created by', type: 'user' },
			{ id: 'kmKvd128', name: 'Status', type: 'select', options: [
				{ value: 'Option 1', label: 'Option 1' },
				{ value: 'Option 2', label: 'Option 2' }
			] },
			{ id: 'kmKvd128multi', name: 'Multi select', type: 'multi_select', options: [
					{ value: 'Option 1', label: 'Option 1' },
					{ value: 'Option 2', label: 'Option 2' }
				] },
			{ id: 'kmKvd129', name: 'Link to another record', type: 'link_to_another_record' },
			{ id: 'kmKvd130', name: 'Attachment', type: 'attachment' },
			{ id: 'kmKvd131', name: 'Checkbox', type: 'checkbox' },

		],
		fetchFn: (key, formData) => {
			return new Promise((resolve) => {
				setTimeout(function () {
					if ('airtable-search-users' === key) {
						const searchTerms = Array.from(formData.values());
						const users = [
							{id: 'userABC123', name: 'Stéphane Taurand', email: 'staurand@tsjm.fr'},
							{id: 'userABC124', name: 'Teresa Montgomery', email: 'teresa-montgomery@gmail.com'},
							{id: 'userABC125', name: 'Jeremy Lawson', email: 'lawson123@ghotmail.com'},
						];
						resolve({
							success: true, data: users.filter(user => {
								return searchTerms.reduce((carry, term) => {
									const termString = term.toString();
									return carry || user.name.indexOf(termString) > -1 || user.id === termString;
								}, false);
							})
						});
					} else if ('airtable-search-records' === key) {
						const searchTerms = Array.from(formData.values());
						const users = [
							{id: 'recordABC123', name: 'Record 1'},
							{id: 'recordABC124', name: 'Record 2'},
							{id: 'recordABC125', name: 'Record 3'},
						];
						resolve({
							success: true, data: users.filter(user => {
								return searchTerms.reduce((carry, term) => {
									const termString = term.toString();
									return carry || user.name.indexOf(termString) > -1 || user.id === termString;
								}, false);
							})
						});
					} else {
						resolve({ success: false, error: 'unknown key ' + key });
					}
				}, 1000)
			});

		}
	}
};
export default meta;


const initFiltersValue = {
	conjunction: 'and',
	filters: [

		{ operator: FilterPropsOperators.Is, columnId: 'kmKvd127', columnName: 'Created by', value: 'userABC123' },
		{ operator: FilterPropsOperators.IsNot, columnId: 'kmKvd127', columnName: 'Created by', value: '' },
		{ operator: FilterPropsOperators.IsAnyOf, columnId: 'kmKvd127', columnName: 'Created by', value: ['userABC123', 'userABC124'] },
		{ operator: FilterPropsOperators.Is, columnId: 'kmKvd123', columnName: 'Name', value: 'Level 1' },
		{ operator: FilterPropsOperators.Is, columnId: 'kmKvd126', columnName: 'Created time', value: { mode: 'exactDate', input: '2024-04-01' } },
		{ operator: FilterPropsOperators.Filename, columnId: 'kmKvd130', columnName: 'Attachment', value: 'jpg' },
		{ operator: FilterPropsOperators.Is, columnId: 'kmKvd128', columnName: 'Status', value: 'Option 1' },
		{ operator: FilterPropsOperators.HasAnyOf, columnId: 'kmKvd128multi', columnName: 'Multi select', value: ['Option 1','Option 2'] },
		{ operator: FilterPropsOperators.Is, columnId: 'kmKvd131', columnName: 'Checkbox', value: '1' },
		//{ operator: FilterPropsOperators.Filetype, columnId: 'kmKvd130', columnName: 'Attachment', value: 'image' },
		{
			conjunction: 'and',
			filters: [
				{ operator: FilterPropsOperators.Is, columnId: 'kmKvd123', columnName: 'Name', value: 'Level 2' },
				{
					conjunction: 'and',
					filters: [
						{ operator: FilterPropsOperators.Is, columnId: 'kmKvd123',columnName: 'Name', value: 'Level 3' },
					]
				}
			]
		}
	]
} as FilterGroupProps;

export const FiltersBasic = ({ ...args }:any) => {
	const [{ conjunction, filters }, setFilterValues] = useState(initFiltersValue);

	return <Filters
		{ ...args }
		onChange={ (newFiltersValue) => {
			setFilterValues(newFiltersValue);
		} }
		conjunction={ conjunction }
		filters={ filters }
	/>;
};


export const FiltersUserFirst = ({ ...args }:any) => {
	const userFirstFiltersValue = {
		conjunction: 'and',
		filters: [
			{ operator: FilterPropsOperators.Is, columnId: 'kmKvd127', columnName: 'Created by', value: 'Stéphane Taurand' },
		]
	} as FilterGroupProps;
	const [{ conjunction, filters }, setFilterValues] = useState(userFirstFiltersValue);

	return <Filters
		{ ...args }
		onChange={ (newFiltersValue) => {
			setFilterValues(newFiltersValue);
		} }
		conjunction={ conjunction }
		filters={ filters }
	/>;
};
