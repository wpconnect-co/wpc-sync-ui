import { StoryFn, Meta } from "@storybook/react";
import Columns from "./Columns";
import {Heading, Paragraph} from "../../content";

const meta: Meta<typeof Columns> =  {
    title: "AirWPSyncUI/Layout/Columns",
    component: Columns,
};
export default meta;

const Template: StoryFn<typeof Columns> = (args) => <Columns {...args} />;
export const TowColumns = Template.bind({});
TowColumns.storyName = 'Columns/2 columns';
TowColumns.args = {
	columns: [
		{
			size: 7,
			children: <>
				<Heading level={2} >🙏  We need your authorisation</Heading>
				<Paragraph>To synchronise, You need to <strong>copy</strong> the Airtable <strong>token</strong> and <strong>authorise</strong> all the <strong>scope</strong> <br />from the <strong>general base</strong>.</Paragraph>
			</>
		},
		{
			size: 3,
			children: <>
				Other content
			</>
		}
	]
};

