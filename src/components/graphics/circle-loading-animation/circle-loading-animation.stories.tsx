import { StoryFn, Meta } from "@storybook/react";
import CircleLoadingAnimation from "./CircleLoadingAnimation";


const meta: Meta<typeof CircleLoadingAnimation> =  {
    title: "AirWPSyncUI/Graphics/CircleLoadingAnimation",
    component: CircleLoadingAnimation,
};
export default meta;

const Template: StoryFn<typeof CircleLoadingAnimation> = (args) => <CircleLoadingAnimation />;

export const CircleLoadingAnimationBasic = Template.bind({});
CircleLoadingAnimationBasic.storyName = 'CircleLoadingAnimation';
