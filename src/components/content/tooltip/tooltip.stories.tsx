import { StoryFn, Meta } from "@storybook/react";
import Tooltip from "./Tooltip";
import Spacer from "../../layout/spacer/Spacer"

const meta: Meta<typeof Tooltip> =  {
    title: "AirWPSyncUI/Content/Tooltip",
    component: Tooltip,
	decorators: (Story) => {
		return <>
			<Spacer size={32} />
			<Story />
			<Spacer size={32} />
		</>
	},
	args: {
		message: <>Create your access token from <a href="https://airtable.com/create/tokens" target="_blank" rel="noreferrer">https://airtable.com/create/tokens</a></>,
		children: (id) => {
			return <div id={ id }>Access Token</div>
		},
	}
};
export default meta;

const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const TooltipBasic = Template.bind({});
TooltipBasic.storyName = 'Tooltip';


export const TooltipMessageRight = Template.bind({});
TooltipMessageRight.storyName = 'Tooltip/Tooltip message on right';
TooltipMessageRight.args = {
	tooltipPosition: 'right',
};
