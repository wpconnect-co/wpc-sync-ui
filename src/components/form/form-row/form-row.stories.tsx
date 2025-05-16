import { StoryFn, Meta } from "@storybook/react";
import FormRow from "./FormRow";
import Input from "../input/Input";
const meta: Meta<typeof FormRow> =  {
    title: "AirWPSyncUI/Form/FormRow",
    component: FormRow,
};
export default meta;

const Template: StoryFn<typeof FormRow> = (args) => <FormRow {...args} />;

export const FormRowBasic = Template.bind({});
FormRowBasic.storyName = 'FormRow';
FormRowBasic.args = {
	children: <Input label="My Label" placeholder="Placeholder" value="" onChange={() => {}} />
};

