import { StoryFn, Meta } from "@storybook/react";
import InlineLoading from "./InlineLoading";
import "./IconLoading.css";

const meta: Meta<typeof InlineLoading> =  {
    title: "AirWPSyncUI/Graphics/InlineLoading",
    component: InlineLoading,
};
export default meta;

const Template: StoryFn<typeof InlineLoading> = (args) => <InlineLoading />;

export const InlineLoadingBasic = Template.bind({});
InlineLoadingBasic.storyName = 'InlineLoading';
