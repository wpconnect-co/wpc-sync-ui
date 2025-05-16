import { StoryFn, Meta } from "@storybook/react";
import Callout, { PrebuiltCallout } from "./Callout";
import { CircleChecked } from "../../graphics/icons";

const meta: Meta<typeof Callout> =  {
    title: "AirWPSyncUI/Content/Callout",
    component: Callout,
};
export default meta;

const Template: StoryFn<typeof Callout> = (args) => <Callout {...args} />;

export const CalloutBasic = Template.bind({});
CalloutBasic.storyName = 'Callout';
CalloutBasic.args = {
	icon: <CircleChecked />,
	children: <>Some content and <a href="#">a link</a></>,
	bgColor: 'primary-50',
};

const TemplatePrebuiltCallout: StoryFn<typeof PrebuiltCallout> = (args) => <PrebuiltCallout {...args} />;

export const CalloutNeutral = TemplatePrebuiltCallout.bind({});
CalloutNeutral.storyName = 'PrebuiltCallout/Neutral';
CalloutNeutral.args = {
	icon: <CircleChecked />,
	children: 'We check the creation of our template in your Airtable database...',
	type: 'neutral',
};

export const CalloutSuccess = TemplatePrebuiltCallout.bind({});
CalloutSuccess.storyName = 'PrebuiltCallout/Success';
CalloutSuccess.args = {
	children: 'The creation of your new database on Airtable is successful!',
	type: 'success',
};


export const CalloutWarning = TemplatePrebuiltCallout.bind({});
CalloutWarning.storyName = 'PrebuiltCallout/Warning';
CalloutWarning.args = {
	children: 'Please, don’t custom the airtable for the moment',
	type: 'warning',
};

export const CalloutError = TemplatePrebuiltCallout.bind({});
CalloutError.storyName = 'PrebuiltCallout/Error';
CalloutError.args = {
	children: <>Please, <strong>reset our original template</strong> before to restart the verification</>,
	type: 'error',
};

export const CalloutLoading = TemplatePrebuiltCallout.bind({});
CalloutLoading.storyName = 'PrebuiltCallout/Loading';
CalloutLoading.args = {
	children: 'We check the creation of our template in your Airtable database...',
	type: 'loading',
};
