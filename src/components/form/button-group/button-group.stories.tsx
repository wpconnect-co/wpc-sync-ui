import { StoryFn, Meta } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import Button from "../button/Button";
import {ButtonIcon} from "../button-icon";

const meta: Meta<typeof ButtonGroup> =  {
    title: "AirWPSyncUI/Form/ButtonGroup",
    component: ButtonGroup,
};
export default meta;

const Template: StoryFn<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const ButtonGroupStory = Template.bind({});
ButtonGroupStory.storyName = 'ButtonGroup';
ButtonGroupStory.args = {
    children: <>
		<ButtonIcon icon="sync" buttonType="primary" iconPos="before">Sync now</ButtonIcon>
		<ButtonIcon icon="circle-loading" disabled={ true } buttonType="primary" iconPos="before">Sync now</ButtonIcon>
		<ButtonIcon icon="download" buttonType="secondary" iconPos="before">Download logs</ButtonIcon>
	</>,
	gap: 10,
};
