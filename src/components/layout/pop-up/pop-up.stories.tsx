import {StoryFn, Meta} from "@storybook/react";
import PopUp from "./PopUp";
import {Heading, Paragraph} from "../../content";
import { useArgs } from "@storybook/preview-api";
import Button from "../../form/button/Button";
const meta: Meta<typeof PopUp> = {
	title: "AirWPSyncUI/Layout/PopUp",
	component: PopUp,

};
export default meta;

const Template: StoryFn<typeof PopUp> = (args) => <PopUp {...args} />;
export const PopUpBasic = Template.bind({});
PopUpBasic.storyName = 'PopUp';
PopUpBasic.args = {
	isOpen: true,
	setIsOpen: (isOpen) => {},
	children: <>
		<Heading level={2}>First, we need your licence key and your authorisation</Heading>
		<Paragraph>To use our wonderful plugin, please enter your license key below:</Paragraph>
	</>,
};

export const PopUpInteractive = ({ ...args }) => {
	const [{ isOpen }, updateArgs] = useArgs();
	const setIsOpen = (isOpen:boolean) => updateArgs({ isOpen });

	return (
		<div>
			<Button onClick={() => setIsOpen(!isOpen) }>Open Pop-up</Button>
			<PopUp
				setIsOpen={setIsOpen}
				isOpen={args.isOpen}
			>
				<Heading level={2}>First, we need your licence key and your authorisation</Heading>
				<Paragraph>To use our wonderful plugin, please enter your license key below:</Paragraph>
			</PopUp>
		</div>
	);
};
