import type {Preview} from "@storybook/react";
// Import common WP styles.
import './assets/wp/css/common.css';
// Import context for Storybook
import './assets/storybook/context.css';
import '../src/index.css';


const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			extractComponentDescription: (component, args) => {
				return component?.__docgenInfo?.description.split('@param')[0];
			}
		},
	},
	decorators: [
		(Story) => (
			<div style={{padding: '16px 20px', maxWidth: '1280px' }}>
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
			</div>
		),
	],

}
;

export default preview;
