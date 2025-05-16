import { StoryFn, Meta } from "@storybook/react";
import Select from "./Select";
import FormRow from "../form-row/FormRow";
import {useState} from "react";
import {SelectOption} from "./Select.types";

const meta: Meta<typeof Select> =  {
    title: "AirWPSyncUI/Form/Select",
    component: Select,
	decorators: [
		(Story) => (
			<FormRow>
				<Story />
			</FormRow>
		),
	],
	args: {
		label: <>First, which <strong>type of products</strong> do you sale (you can choose several products type)?</>,
		placeholder: 'Choose the type of product',
		options: [
			{ value: 'simple', label: 'Simple product' },
			{ value: 'variable', label: 'Variable product' },
			{ value: 'downloadable', label: 'Downloadable product' }
		],
	}
};
export default meta;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

export const SelectBasic = Template.bind({});
SelectBasic.storyName = 'Select';

export const SelectValueSelected = Template.bind({});
SelectValueSelected.storyName = 'Select/Value selected';
SelectValueSelected.args = {
	value: { value: 'simple', label: 'Simple product' }
}

export const SelectWithInstruction = Template.bind({});
SelectWithInstruction.storyName = 'Select/With instructions';
SelectWithInstruction.args = {
	instructions: 'Some instructions'
}

export const SelectInvalid = Template.bind({});
SelectInvalid.storyName = 'Select/Invalid';
SelectInvalid.args = {
	status: 'invalid'
}

export const SelectDisabledOption = Template.bind({});
SelectDisabledOption.storyName = 'Select/Disabled Option';
SelectDisabledOption.args = {
	options:  [
		{ value: 'disabled', label: 'Disabled option', isDisabled: true, },
		{ value: 'simple', label: 'Simple product' },
		{ value: 'variable', label: 'Variable product' },
		{ value: 'downloadable', label: 'Downloadable product' },

	],
}

export const SelectReactSelectOptions = ({ ...args }:any) => {
	const [value, setValue] = useState('simple');

	const selectProps = {
		...args,
		value: args.options.reduce((carry:string|SelectOption, option:SelectOption) => {
			if (option.value === value) {
				carry = option;
			}
			return carry;
		}, ''),
		isClearable: true,
		isSearchable: true,
		onChange: (e:SelectOption|undefined) => {
			if (e) {
				setValue(e.value)
			} else {
				setValue('');
			}
		}
	}
	return <Select {...selectProps} />
}
SelectReactSelectOptions.storyName = 'Select/With some React Select options';


export const SelectReactSelectOptionWithInstructions = ({ ...args }:any) => {
	const [value, setValue] = useState('simple');
	const optionsWithInstructions = [
		{ value: 'simple', label: 'Simple product', description: 'This type of product covers the vast majority of products sold on a store. Simple products are shipped and have no special options. For example, a book.'},
		{ value: 'variable', label: 'Variable product', description: 'Products that have multiple variations, each of which may have a different price option, stock, SKU, etc. For example, a t-shirt available in different colors and/or sizes.' },
		{ value: 'downloadable', label: 'Downloadable product', description: 'This option activates additional fields that allow you to add one or more downloadable files. After the order validation step, customers receive a link in the order notification email that allows them to download the file.' }
	];
	const selectProps = {
		...args,
		options: optionsWithInstructions,
		value: optionsWithInstructions.reduce((carry:string|SelectOption, option:SelectOption) => {
			if (option.value === value) {
				carry = option;
			}
			return carry;
		}, ''),
		isClearable: false,
		isSearchable: false,
		onChange: (e:SelectOption|undefined) => {
			if (e) {
				setValue(e.value)
			} else {
				setValue('');
			}
		}
	}
	return <Select {...selectProps} />
}
SelectReactSelectOptionWithInstructions.storyName = 'Select/With some option descriptions';
