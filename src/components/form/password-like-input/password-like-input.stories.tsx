import { StoryFn, Meta } from "@storybook/react";
import PasswordLikeInput from "./PasswordLikeInput";
import FormRow from "../form-row/FormRow";

const meta: Meta<typeof PasswordLikeInput> =  {
    title: "AirWPSyncUI/Form/PasswordLikeInput",
    component: PasswordLikeInput,
	decorators: [
		(Story) => (
			<FormRow>
				<Story />
			</FormRow>
		),
	]
};
export default meta;

const Template: StoryFn<typeof PasswordLikeInput> = (args) => <PasswordLikeInput {...args} />;

export const PasswordLikeInputShowPassword = Template.bind({});
PasswordLikeInputShowPassword.storyName = 'PasswordLikeInput/Show Password';
PasswordLikeInputShowPassword.args = {
	label: 'Password',
	value: 'y2I0l51OTdd9mhHh3k3L9H3chfGc5aTJ',
	showPassword: true,
};

export const PasswordLikeInputMaskPassword = Template.bind({});
PasswordLikeInputMaskPassword.storyName = 'PasswordLikeInput/Mask Password';
PasswordLikeInputMaskPassword.args = {
	label: 'Password',
	value: 'y2I0l51OTdd9mhHh3k3L9H3chfGc5aTJ',
	showPassword: false,
};

