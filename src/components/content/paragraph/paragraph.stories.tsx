import { StoryFn, Meta } from "@storybook/react";
import Paragraph from "./Paragraph";

const meta: Meta<typeof Paragraph> =  {
    title: "AirWPSyncUI/Content/Paragraph",
    component: Paragraph,
	args: {
		children: <>To synchronise, You need to <strong>copy</strong> the Airtable <strong>token</strong> and <strong>authorise</strong> all the <strong>scope</strong> from the <strong>general base</strong>.</>,
	}
};
export default meta;

const Template: StoryFn<typeof Paragraph> = (args) => <Paragraph {...args} />;

export const ParagraphBasic = Template.bind({});
ParagraphBasic.storyName = 'Paragraph';

export const ParagraphBold = Template.bind({});
ParagraphBold.storyName = 'Paragraph/Weight bold';
ParagraphBold.args = {
	weight: 'bold',
};

export const ParagraphColor = Template.bind({});
ParagraphColor.storyName = 'Paragraph/Color';
ParagraphColor.args = {
	color: 'primary-300',
};

export const ParagraphFontSize = Template.bind({});
ParagraphFontSize.storyName = 'Paragraph/Font size';
ParagraphFontSize.args = {
	fontSize: 'xs'
};
