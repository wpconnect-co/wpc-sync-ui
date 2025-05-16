import { Meta } from "@storybook/react";
import MappingRow from "./MappingRow";
import {defaultMappingOptions, fields, isOptionAvailable} from "./storybook-data";

import {AirtableField, FieldOptions} from "../../../models/mapping/Mapping.types";
import MappingManager from "../../../models/mapping/MappingManager";
import {useState} from "react";
import {checkValidAirtableFields} from "../../../models/mapping/helpers";


const meta: Meta<typeof MappingRow> =  {
    title: "AirWPSyncUI/Form/MappingRow",
    component: MappingRow,
	args: {
		texts: {
			custom_field: 'Custom Field',
			import_as: 'Import As',
			required_field_indicator: ' (required)',
			airtable_field: 'Airtable Field',
			fields: 'Fields',
			sort: 'Sort',
			remove: 'Remove'
		}
	}
};
export default meta;

export function MappingRowBasic({ ...args }) {

	const [ mapping, setMapping ] = useState(checkValidAirtableFields([
		{
			"airtable": "fldQF3hyuRnmpUP8Z",
			"wordpress": "post::post_title",
			"options": {} as FieldOptions
		}
	], fields as AirtableField[]));

	const mappingManager = new MappingManager(
		mapping,
		setMapping,
		fields as AirtableField[],
		defaultMappingOptions,
		isOptionAvailable
	);

	return <table className="form-table">
		<thead>
		<tr>
			<th>
				<span>{ args.texts.airtable_field }</span>
				<span className="airwpsync-required" aria-hidden="true"> *</span>
				<span className="screen-reader-text">{ args.texts.required_field_indicator }</span>
			</th>
			<th>
				<span>{ args.texts.import_as }</span>
				<span className="airwpsync-required" aria-hidden="true"> *</span>
				<span className="screen-reader-text">{ args.texts.required_field_indicator }</span>
			</th>
			<th className="col-actions"></th>
		</tr>
		</thead>
		<tbody key="metabox-mapping-body">
		{
			mapping.length > 0 ?
				<MappingRow
					texts={ args.texts }
					index={ 0 }
					airtableFieldId={ mapping[0].airtable }
					wordPressFieldId={ mapping[0].wordpress }
					fieldOptions={ mapping[0].options }
					mappingManager={ mappingManager }
				/>
				: <tr><td>Mapping empty</td></tr>
		}
		</tbody>
	</table>;
}

