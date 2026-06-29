import { StoryFn, Meta } from "@storybook/react";
import Hr from "./Hr";
import Paragraph from "../paragraph/Paragraph";

const meta: Meta<typeof Hr> =  {
    title: "AirWPSyncUI/Content/Hr",
    component: Hr,
	args: {

	}
};
export default meta;

const Template: StoryFn<typeof Hr> = (args) => <>
	<Paragraph>Some content</Paragraph>
	<Hr />
	<Paragraph>Some content</Paragraph>
</>;

export const HrBasic = Template.bind({});
HrBasic.storyName = 'Hr';
