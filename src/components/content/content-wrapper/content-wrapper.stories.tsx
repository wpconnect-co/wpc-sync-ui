import { StoryFn, Meta } from "@storybook/react";
import ContentWrapper from "./ContentWrapper";
import Paragraph from "../paragraph/Paragraph";

const meta: Meta<typeof ContentWrapper> =  {
    title: "AirWPSyncUI/Content/ContentWrapper",
    component: ContentWrapper,
};
export default meta;

const Template: StoryFn<typeof ContentWrapper> = (args) => <ContentWrapper {...args} />;

export const ContentWrapperStory = Template.bind({});
ContentWrapperStory.storyName = 'ContentWrapper';
ContentWrapperStory.args = {
	children: <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam magna metus, tincidunt non mollis vitae, mollis non magna. Morbi eget dolor et dui euismod dapibus. Etiam mollis, quam id lobortis consectetur, massa est volutpat odio, quis suscipit libero metus vel felis. Nullam dictum nibh quis rutrum elementum. Donec vitae luctus urna. Pellentesque sodales fermentum nisi, nec mollis lorem faucibus eu. Pellentesque sit amet aliquet odio, nec condimentum massa. Vestibulum sed rhoncus enim, placerat rutrum urna. Nam id nisl in mi malesuada mollis mollis eget nisl. Vivamus sodales mollis elementum. Sed at ex faucibus, convallis lectus laoreet, tempor tortor.</Paragraph>,
};
