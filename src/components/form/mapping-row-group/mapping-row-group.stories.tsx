import { Meta } from "@storybook/react";
import MappingRowGroup from "./MappingRowGroup";
import MappingRowTemplate from "../mapping-row-template/MappingRowTemplate";
import {defaultMappingOptions, fields, isOptionAvailable} from "../mapping-row/storybook-data";

import {AirtableField, Mapping} from "../../../models/mapping/Mapping.types";
import MappingManager from "../../../models/mapping/MappingManager";
import {useState} from "react";
import {MappingRowTemplateStatus, MappingRowTemplateTexts} from "../mapping-row-template/MappingRowTemplate.types";
import MappingRowTempateMeta from "../mapping-row-template/mapping-row-template.stories"

const meta: Meta<typeof MappingRowGroup> =  {
	title: "AirWPSyncUI/Form/MappingRowGroup",
	component: MappingRowGroup,
};
export default meta;

export function MappingRowGroupBasic({ ...args }) {

	const [ mapping, setMapping ] = useState([
		{
			"airtable": "Idle",
			"wordpress": "post::post_title",
		},
		{
			"airtable": "Valid",
			"wordpress": "post::post_title",
		},
		{
			"airtable": "Loading",
			"wordpress": "post::post_title",
		},
		{
			"airtable": "Invalid",
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
		<MappingRowGroup label="Main">
		{
			mapping.length > 0 ?
				mapping.map(((mappingRow, index) => {
					return <MappingRowTemplate
						readOnly={ true }
						status={ statuses[index] }
						texts={ MappingRowTempateMeta.args?.texts ?? {} as MappingRowTemplateTexts }
						index={ index }
						expectedAirtableFieldName={ mappingRow.airtable }
						wordPressFieldId={ mappingRow.wordpress }
						mappingManager={ mappingManager }
						errorMessage={ statuses[index] === MappingRowTemplateStatus.Invalid ? 'We could not found this field on your Airtable.' : undefined }
					/>
				}))

				: <tr><td>Mapping is empty</td></tr>
		}
		</MappingRowGroup>
		<MappingRowGroup label="Product data">
			{
				mapping.length > 0 ?
					mapping.map(((mappingRow, index) => {
						return <MappingRowTemplate
							readOnly={ true }
							status={ statuses[index] }
							texts={ MappingRowTempateMeta.args?.texts ?? {} as MappingRowTemplateTexts }
							index={ index }
							expectedAirtableFieldName={ mappingRow.airtable }
							wordPressFieldId={ mappingRow.wordpress }
							mappingManager={ mappingManager }
							errorMessage={ statuses[index] === MappingRowTemplateStatus.Invalid ? 'We could not found this field on your Airtable.' : undefined }
						/>
					}))

					: <tr><td>Mapping is empty</td></tr>
			}
		</MappingRowGroup>
	</table>;
}

