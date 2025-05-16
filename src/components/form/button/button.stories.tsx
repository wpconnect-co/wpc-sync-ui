import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> =  {
    title: "AirWPSyncUI/Form/Button",
    component: Button,
};
export default meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.storyName = 'Button/Primary';
ButtonPrimary.args = {
    children: "Primary button",
	buttonType: "primary",
};

export const ButtonPrimaryHover = Template.bind({});
ButtonPrimaryHover.storyName = 'Button/Primary : hover';
ButtonPrimaryHover.args = {
	children: "Primary button",
	buttonType: "primary",
};
ButtonPrimaryHover.parameters = { pseudo: { hover: true } };

export const ButtonPrimaryDisabled = Template.bind({});
ButtonPrimaryDisabled.storyName = 'Button/Primary : disabled';
ButtonPrimaryDisabled.args = {
    children: "Primary button disabled",
	buttonType: "primary",
    disabled: true,
};


export const ButtonSecondary = Template.bind({});
ButtonSecondary.storyName = 'Button/Secondary';
ButtonSecondary.args = {
	children: "Secondary button",
	buttonType: "secondary",
};

export const ButtonSecondaryHover = Template.bind({});
ButtonSecondaryHover.storyName = 'Button/Secondary : hover';
ButtonSecondaryHover.args = {
	children: "Secondary button",
	buttonType: "secondary",
};
ButtonPrimaryHover.parameters = { pseudo: { hover: true } };

export const ButtonSecondaryDisabled = Template.bind({});
ButtonSecondaryDisabled.storyName = 'Button/Secondary : disabled';
ButtonSecondaryDisabled.args = {
	children: "Secondary button disabled",
	buttonType: "secondary",
	disabled: true,
};



export const ButtonLink = Template.bind({});
ButtonLink.storyName = 'Button/Link';
ButtonLink.args = {
	children: "Link button",
	buttonType: "link",
};

export const ButtonLinkHover = Template.bind({});
ButtonLinkHover.storyName = 'Button/Link : hover';
ButtonLinkHover.args = {
	children: "Link button",
	buttonType: "link",
};
ButtonLinkHover.parameters = { pseudo: { hover: true } };

export const ButtonLinkDisabled = Template.bind({});
ButtonLinkDisabled.storyName = 'Button/Link : disabled';
ButtonLinkDisabled.args = {
	children: "Link button disabled",
	buttonType: "link",
	disabled: true,
};

export const ButtonFontXS = Template.bind({});
ButtonFontXS.storyName = 'Button/FontXS';
ButtonFontXS.args = {
	children: "Button font XS",
	buttonType: "link",
	fontSize: 'xs'
};
