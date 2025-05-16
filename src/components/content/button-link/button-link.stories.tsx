import { StoryFn, Meta } from "@storybook/react";
import ButtonLink from "./ButtonLink";

const meta: Meta<typeof ButtonLink> =  {
    title: "AirWPSyncUI/Content/ButtonLink",
    component: ButtonLink,
	args: {
		href: 'https://wpconnect.co/',
		target: '_blank',
		rel: 'noreferrer',
	}
};
export default meta;

const Template: StoryFn<typeof ButtonLink> = (args) => <ButtonLink {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.storyName = 'ButtonLink/Primary';
ButtonPrimary.args = {
    children: "Primary button",
	buttonType: "primary",
};

export const ButtonPrimaryHover = Template.bind({});
ButtonPrimaryHover.storyName = 'ButtonLink/Primary : hover';
ButtonPrimaryHover.args = {
	children: "Primary button",
	buttonType: "primary",
};
ButtonPrimaryHover.parameters = { pseudo: { hover: true } };


