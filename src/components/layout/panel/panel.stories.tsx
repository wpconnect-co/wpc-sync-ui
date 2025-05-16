import {StoryFn, Meta} from "@storybook/react";
import Panel from "./Panel";
import {Columns} from "../columns";
import {Heading, Paragraph} from "../../content";

const meta: Meta<typeof Panel> = {
	title: "AirWPSyncUI/Layout/Panel",
	component: Panel,
};
export default meta;

const Template: StoryFn<typeof Panel> = (args) => <Panel {...args} />;

export const PanelBasic = Template.bind({});
PanelBasic.storyName = 'Panel';
PanelBasic.args = {
	children: <>To synchronise, You need to <strong>copy</strong> the
		Airtable <strong>token</strong> and <strong>authorise</strong> all the <strong>scope</strong> from the <strong>general
			base</strong>.</>,
};

export const PanelColumns = Template.bind({});
PanelColumns.storyName = 'Panel/Columns';
PanelColumns.args = {
	children: <Columns columns={[
		{
			size: 7,
			children: <>
				<Heading level={2}>🙏 We need your authorisation</Heading>
				<Paragraph>To synchronise, You need to <strong>copy</strong> the
					Airtable <strong>token</strong> and <strong>authorise</strong> all the <strong>scope</strong> <br/>from
					the <strong>general base</strong>.</Paragraph>
			</>
		},
		{
			size: 3,
			children: <>
				Other content
			</>
		}
	]}></Columns>
};

