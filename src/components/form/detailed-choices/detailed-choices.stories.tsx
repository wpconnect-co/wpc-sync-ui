import { StoryFn, Meta } from "@storybook/react";

import DetailedChoices from "./DetailedChoices";
import {useState} from "react";
import {Paragraph} from "../../content";
import {DetailedChoicesProps} from "./DetailedChoices.types";

const meta: Meta<typeof DetailedChoices> =  {
    title: "AirWPSyncUI/Form/DetailedChoices",
    component: DetailedChoices,
	args: {
		legend: 'Choose a template',
		selected: 'air_woo_sync_template',
		choices: [
			{
				label: 'WP connect WooCommerce Orders template',
				description: <>
					<Paragraph>Use a pre-built template fully compatible with our great <a href="https://wpconnect.co/woocommerce-airtable-integration/" target="_blank">Air WP Sync for WooCommerce plugin</a>.</Paragraph>
					<Paragraph>Save time, you don’t have to create your own table and take advantage of our auto-mapping</Paragraph>
				</>,
				value: 'air_woo_sync_template',
			},
			{
				label: 'Start from scratch',
				description: <>
					<Paragraph>Build you own table and map your fields manually.</Paragraph>
				</>,
				value: 'from_scratch',
			}
		]
	}
};
export default meta;

const Template: StoryFn<typeof DetailedChoices> = (args) => <DetailedChoices {...args} />;

export function DetailedChoicesInteractive({ ...args}) {
	const [currentValue, setCurrentValue] = useState(args.selected);
	const props = {
		 ...args,
		selected: currentValue,
		onChange: setCurrentValue
	} as DetailedChoicesProps;
	return <DetailedChoices
		{ ...props }
	/>
}
