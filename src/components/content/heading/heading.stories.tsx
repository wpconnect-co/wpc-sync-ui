import { StoryFn, Meta } from "@storybook/react";
import Heading from "./Heading";

const meta: Meta<typeof Heading> =  {
    title: "AirWPSyncUI/Content/Heading",
    component: Heading,
};
export default meta;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const HeadingH1 = Template.bind({});
HeadingH1.storyName = 'Heading/H1';
HeadingH1.args = {
	level: 1,
    children: "Heading H1",
};

export const HeadingH2 = Template.bind({});
HeadingH2.storyName = 'Heading/H2';
HeadingH2.args = {
	level: 2,
	children: "Heading H2",
};

export const HeadingH3 = Template.bind({});
HeadingH3.storyName = 'Heading/H3';
HeadingH3.args = {
	level: 3,
	children: "Heading H3",
};

export const HeadingEmoji = Template.bind({});
HeadingEmoji.storyName = 'Heading/Emoji';
HeadingEmoji.args = {
	level: 2,
	children: "Heading Emoji",
	emoji: "🙏"
};
