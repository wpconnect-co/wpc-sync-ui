import { StoryFn, Meta } from "@storybook/react";
import ButtonIcon from "./ButtonIcon";

const meta: Meta<typeof ButtonIcon> =  {
    title: "AirWPSyncUI/Form/ButtonIcon",
    component: ButtonIcon,
};
export default meta;

const Template: StoryFn<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const ButtonOpenExternal = Template.bind({});
ButtonOpenExternal.args = {
	children: "Create a base on Airtable",
	buttonType: "primary",
	icon: 'open-external',
	iconPos: 'after'
};

export const ButtonCancel = Template.bind({});
ButtonCancel.args = {
	children: "Cancel import",
	buttonType: "link",
	icon: 'cross',
	iconPos: 'before',
	style: {
		color: 'var(--airwpsync--color--error)'
	}
};



export const ButtonArrowRight = Template.bind({});
ButtonArrowRight.args = {
    children: "Next step",
    buttonType: "primary",
    icon: 'arrow-right',
	disabled: true,
};

export const ButtonArrowLeft = Template.bind({});
ButtonArrowLeft.args = {
	children: "Back",
	buttonType: "link",
	icon: 'arrow-left',
	iconPos: 'before',
	underlined: false,
};

export const ButtonCircleLoading = Template.bind({});
ButtonCircleLoading.args = {
	children: "Verifying...",
	buttonType: "primary",
	icon: 'circle-loading',
	disabled: true,
};

export const ButtonIconXS = Template.bind({});
ButtonIconXS.args = {
	children: "Button icon XS",
	buttonType: "link",
	icon: 'cross',
	fontSize: 'xs',
	iconPos: 'before'
};
