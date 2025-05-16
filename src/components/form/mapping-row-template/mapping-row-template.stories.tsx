import {Meta} from "@storybook/react";
import MappingRowTemplate from "./MappingRowTemplate";
import {defaultMappingOptions, fields, isOptionAvailable} from "../mapping-row/storybook-data";

import {AirtableField, Mapping} from "../../../models/mapping/Mapping.types";
import MappingManager from "../../../models/mapping/MappingManager";
import {useState} from "react";
import {MappingRowTemplateStatus} from "./MappingRowTemplate.types";


const meta: Meta<typeof MappingRowTemplate> =  {
    title: "AirWPSyncUI/Form/MappingRowTemplate",
    component: MappingRowTemplate,
	args: {
		texts: {
			assigned_to: 'Assigned to',
			remove: 'Remove',
			sort: 'Sort',
		}
	}
};
export default meta;

export function MappingRowTemplateBasic({ ...args }) {

	const [ mapping, setMapping ] = useState([
		{
			"airtableFieldName": "Idle",
			"wordpress": "post::post_title",
		},
		{
			"airtableFieldName": "Valid",
			"wordpress": "post::post_title",
		},
		{
			"airtableFieldName": "Loading",
			"wordpress": "post::post_title",
		},
		{
			"airtableFieldName": "Invalid",
			"wordpress": "post::post_title",
		},
	] as Mapping[]);

	const mappingManager = new MappingManager(
		mapping,
		setMapping,
		fields as AirtableField[],
		defaultMappingOptions,
		isOptionAvailable
	);

	const statuses = [
		MappingRowTemplateStatus.Idle,
		MappingRowTemplateStatus.Valid,
		MappingRowTemplateStatus.Loading,
		MappingRowTemplateStatus.Invalid
	];

	return <table className="form-table">
		<tbody key="metabox-mapping-body">
		{
			mapping.length > 0 ?
				mapping.map(((mappingRow, index) => {

					return <MappingRowTemplate
						key={index}
						readOnly={ true }
						status={ statuses[index] }
						texts={ args.texts }
						index={ index }
						expectedAirtableFieldName={ mappingRow.airtableFieldName ?? '' }
						wordPressFieldId={ mappingRow.wordpress }
						mappingManager={ mappingManager }
						errorMessage={ statuses[index] === MappingRowTemplateStatus.Invalid ? 'We could not found this field on your Airtable.' : undefined }
					/>
				}))

				: <tr><td>Mapping is empty</td></tr>
		}
		</tbody>
	</table>;
}

export function MappingRowTemplateRemovable({ ...args }) {

	const [ mapping, setMapping ] = useState([
		{
			"airtableFieldName": "Idle",
			"wordpress": "post::post_title",
		},
		{
			"airtableFieldName": "Valid",
			"wordpress": "post::post_title",
		},
		{
			"airtableFieldName": "Loading",
			"wordpress": "post::post_title",
		},
		{
			"airtableFieldName": "Invalid",
			"wordpress": "post::post_title",
		},

	] as Mapping[]);

	const mappingManager = new MappingManager(
		mapping,
		setMapping,
		fields as AirtableField[],
		defaultMappingOptions,
		isOptionAvailable
	);

	const statuses = [
		MappingRowTemplateStatus.Idle,
		MappingRowTemplateStatus.Valid,
		MappingRowTemplateStatus.Loading,
		MappingRowTemplateStatus.Invalid
	];

	return <table className="form-table">
		<tbody key="metabox-mapping-body">
		{
			mapping.length > 0 ?
				mapping.map(((mappingRow, index) => {

					return <MappingRowTemplate
						key={index}
						readOnly={ false }
						status={ statuses[index] }
						texts={ args.texts }
						index={ index }
						expectedAirtableFieldName={ mappingRow.airtableFieldName ?? '' }
						wordPressFieldId={ mappingRow.wordpress }
						mappingManager={ mappingManager }
						errorMessage={ statuses[index] === MappingRowTemplateStatus.Invalid ? 'We could not found this field on your Airtable.' : undefined }
					/>
				}))

				: <tr><td>Mapping is empty</td></tr>
		}
		</tbody>
	</table>;
}
