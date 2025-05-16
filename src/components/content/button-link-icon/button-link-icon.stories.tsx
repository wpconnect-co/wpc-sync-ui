import { StoryFn, Meta } from "@storybook/react";
import ButtonLinkIcon from "./ButtonLinkIcon";

const meta: Meta<typeof ButtonLinkIcon> =  {
    title: "AirWPSyncUI/Content/ButtonLinkIcon",
    component: ButtonLinkIcon,
	args: {
		href: 'https://wpconnect.co/',
		target: '_blank',
		rel: 'noreferrer',
	}
};
export default meta;

const Template: StoryFn<typeof ButtonLinkIcon> = (args) => <ButtonLinkIcon {...args} />;

export const ButtonLinkIconOpenExternal = Template.bind({});
ButtonLinkIconOpenExternal.args = {
	children: "Create a base on Airtable",
	buttonType: "primary",
	icon: 'open-external',
	iconPos: 'after'
};


export const ButtonArrowRight = Template.bind({});
ButtonArrowRight.args = {
    children: "Next step",
    buttonType: "primary",
    icon: 'arrow-right',
};

export const ButtonArrowLeft = Template.bind({});
ButtonArrowLeft.args = {
	children: "Back",
	buttonType: "link",
	icon: 'arrow-left',
	iconPos: 'before',
	underlined: false,
};

export const ButtonDownload = Template.bind({});
ButtonDownload.args = {
	children: "Download",
	buttonType: "secondary",
	icon: 'download',
	iconPos: 'before',
	underlined: false,
};

