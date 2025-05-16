import {Meta, StoryFn} from "@storybook/react";
import Input, {InputType} from "./Input";
import FormRow from "../form-row/FormRow";


const meta: Meta<typeof Input> =  {
    title: "AirWPSyncUI/Form/Input",
    component: Input,
	decorators: [
		(Story) => (
			<FormRow>
				<Story />
			</FormRow>
		),
	],
	args: {
		onChange:() => { console.log('changed') }
	}
};
export default meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const InputText = Template.bind({});
InputText.storyName = 'Input/Text';
InputText.args = {
	label: 'Label',
    type: InputType.Text,
	value: 'Some content'
};

export const InputTextFocus = Template.bind({});
InputTextFocus.storyName = 'Input/Text : focus';
InputTextFocus.args = {
	label: 'Label',
	type: InputType.Text,
	value: 'Some content'
};

InputTextFocus.parameters = { pseudo: { focus: true } };

export const InputTextValid = Template.bind({});
InputTextValid.storyName = 'Input/Text valid';
InputTextValid.args = {
	label: 'Label',
	type: InputType.Text,
	value: 'Valid content',
	status: 'valid',
};

export const InputTextInvalid = Template.bind({});
InputTextInvalid.storyName = 'Input/Text invalid';
InputTextInvalid.args = {
	label: 'Label',
	type: InputType.Text,
	value: 'Invalid content',
	status: 'invalid',
};

export const InputTextPlaceholder = Template.bind({});
InputTextPlaceholder.storyName = 'Input/Placeholder';
InputTextPlaceholder.args = {
	label: 'Label',
	type: InputType.Text,
	placeholder: 'Placeholder'
};

export const InputTextInstructions = Template.bind({});
InputTextInstructions.storyName = 'Input/Instructions';
InputTextInstructions.args = {
	label: 'Label',
	type: InputType.Text,
	instructions: 'Some instructions'
};

