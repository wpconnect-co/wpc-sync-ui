import { StoryFn, Meta } from "@storybook/react";
import StepsIndex from "./StepsIndex";
import Spacer from "../../layout/spacer/Spacer"

const meta: Meta<typeof StepsIndex> =  {
    title: "AirWPSyncUI/Content/StepsIndex",
    component: StepsIndex,
	decorators: (Story) => {
		return <>
			<Spacer size={32} />
			<Story />
			<Spacer size={32} />
		</>
	},
	args: {
		steps: [
			{ stepKey: 'choose_your_product_type', title: 'Choose product type' },
			{ stepKey: 'set_import_settings', title: 'Set import settings' },
			{ stepKey: 'map_columns', title: 'Map columns to each other' },
			{ stepKey: 'sync', title: 'Sync your products' }
		],
		currentStepKey: 'choose_your_product_type',
		style: {
			'--airwpsync--step-index-bgcolor': '#FFF',
		} as React.CSSProperties

	}
};
export default meta;

const Template: StoryFn<typeof StepsIndex> = (args) => <StepsIndex {...args} />;

export const StepsIndexBasic = Template.bind({});
StepsIndexBasic.storyName = 'StepsIndex';

export const StepsIndexStepSelected = Template.bind({});
StepsIndexStepSelected.storyName = 'StepsIndex/3rd Step Selected';
StepsIndexStepSelected.args = {
	currentStepKey: 'map_columns',
	stepsDone: ['choose_your_product_type', 'set_import_settings']
}
