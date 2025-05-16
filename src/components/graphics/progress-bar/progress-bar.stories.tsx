import { StoryFn, Meta } from "@storybook/react";
import ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> =  {
    title: "AirWPSyncUI/Graphics/ProgressBar",
    component: ProgressBar,
	args: {
		children: (id) => <div id={id} style={{ marginBottom: '10px', color: 'var(--airwpsync--color--primary-300)' }}>Description for accessibility (probably hidden)</div>
	}
};
export default meta;

const Template: StoryFn<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const ProgressBarBasic = Template.bind({});
ProgressBarBasic.storyName = 'ProgressBar';
ProgressBarBasic.args = {
	ratio: 0.5
}

export const ProgressBar0Percent = Template.bind({});
ProgressBar0Percent.storyName = 'ProgressBar/0 %';
ProgressBar0Percent.args = {
	ratio: 0
}
export const ProgressBar100Percent = Template.bind({});
ProgressBar100Percent.storyName = 'ProgressBar/100 %';
ProgressBar100Percent.args = {
	ratio: 1
}

export const ProgressBarGreenColor = Template.bind({});
ProgressBarGreenColor.storyName = 'ProgressBar/Green';
ProgressBarGreenColor.args = {
	ratio: 0.5,
	color: 'green-500',
	bgColor: 'green-500',
}
