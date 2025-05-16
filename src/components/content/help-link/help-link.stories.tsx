import { StoryFn, Meta } from "@storybook/react";
import HelpLink from "./HelpLink";
import previewFile from './static/preview.png';

const meta: Meta<typeof HelpLink> =  {
    title: "AirWPSyncUI/Content/HelpLink",
    component: HelpLink,
};
export default meta;

const Template: StoryFn<typeof HelpLink> = (args) => <HelpLink {...args} />;

export const HelpLinkBasic = Template.bind({});
HelpLinkBasic.storyName = 'HelpLink';
HelpLinkBasic.args = {
	text: 'How it looks like behind the link ?',
    href: 'https://wpconnect.co/',
};

export const HelpLinkHover = Template.bind({});
HelpLinkHover.storyName = 'HelpLink : hover';
HelpLinkHover.args = {
	text: 'How it looks like behind the link ?',
	href: 'https://wpconnect.co/',
};
HelpLinkHover.parameters = { pseudo: { hover: true } };

export const HelpLinkFocusVisible = Template.bind({});
HelpLinkFocusVisible.storyName = 'HelpLink : focus-visible';
HelpLinkFocusVisible.args = {
	text: 'How it looks like behind the link ?',
	href: 'https://wpconnect.co/',
};
HelpLinkFocusVisible.parameters = { pseudo: { focusVisible: true } };


export const HelpLinkWithPreview = Template.bind({});
HelpLinkWithPreview.storyName = 'HelpLink/Preview';
HelpLinkWithPreview.args = {
	text: 'How it looks like behind the link ?',
	href: 'https://wpconnect.co/',
	preview: {
		src: previewFile, alt: 'a preview'
	}
};


export const HelpLinkWithPreviewVertical = Template.bind({});
HelpLinkWithPreviewVertical.storyName = 'HelpLink/Preview/Vertical';
HelpLinkWithPreviewVertical.args = {
	text: 'How it looks like behind the link ?',
	href: 'https://wpconnect.co/',
	preview: {
		src: previewFile, alt: 'a preview'
	},
	direction: 'vertical'
};


