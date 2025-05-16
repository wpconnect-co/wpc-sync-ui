import {StoryFn, Meta} from "@storybook/react";
import Spacer from "./Spacer";
import {Paragraph} from "../../content";

const meta: Meta<typeof Spacer> = {
	title: "AirWPSyncUI/Layout/Spacer",
	component: Spacer,
	decorators: [
		(Story) => (<>
			<Paragraph>Text before</Paragraph>
				<Story />
			<Paragraph>Text After</Paragraph>

		</>),
	]
};
export default meta;

const Template: StoryFn<typeof Spacer> = (args) => <Spacer {...args} />;

export const SpacerBasic = Template.bind({});
SpacerBasic.storyName = 'Spacer';
SpacerBasic.args = {
	size: 10
};
