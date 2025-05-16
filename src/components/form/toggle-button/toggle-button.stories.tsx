import { StoryFn, Meta } from "@storybook/react";

import ToggleButton from "./ToggleButton";
import {useState} from "react";

const meta: Meta<typeof ToggleButton> =  {
    title: "AirWPSyncUI/Form/ToggleButton",
    component: ToggleButton,
	args: {
		label: 'Activate'
	}
};
export default meta;

const Template: StoryFn<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

export function ToggleButtonInteractive({ ...args}) {
	const [checked, setChecked] = useState(false)
	return <ToggleButton
		checked={ checked }
		label={ args.label }
		onChange={(e) => {
			setChecked(!checked);
		}}
	/>
}

export const ToggleButtonUnchecked = Template.bind({});
ToggleButtonUnchecked.storyName = 'ToggleButton/Unchecked';
ToggleButtonUnchecked.args = {

};


export const ToggleButtonChecked = Template.bind({});
ToggleButtonChecked.storyName = 'ToggleButton/Checked';
ToggleButtonChecked.args = {
	checked: true
};

export const ToggleButtonDisabled = Template.bind({});
ToggleButtonDisabled.storyName = 'ToggleButton/Disabled';
ToggleButtonDisabled.args = {
	disabled: true
};
