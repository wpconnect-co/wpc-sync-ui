import { Meta } from "@storybook/react";
import MappingRowReversed from "./MappingRowReversed";
import {defaultMappingOptions, fields, isOptionAvailable} from "../mapping-row/storybook-data";

import {AirtableField, FieldOptions, Mapping} from "../../../models/mapping/Mapping.types";
import MappingManager from "../../../models/mapping/MappingManager";
import {useState, useEffect, useRef} from "react";
import {checkValidWordPressFields, defaultMappingOptionsToWordPressField} from "../../../models/mapping/helpers";
import MappingManagerReversed from "../../../models/mapping/MappingManagerReversed";
import Sortable from 'sortablejs';
import {MappingRowTemplate} from "../mapping-row-template";
import {MappingRowTemplateStatus} from "../mapping-row-template/MappingRowTemplate.types";
import {MappingRowGroup} from "../mapping-row-group";

const meta: Meta<typeof MappingRowReversed> =  {
    title: "AirWPSyncUI/Form/MappingRowReversed",
    component: MappingRowReversed,
	args: {
		texts: {
			custom_field: 'Custom Field',
			required_field_indicator: ' (required)',
			airtable_field: 'Airtable Field',
			fields: 'Fields',
			sort: 'Sort',
			remove: 'Remove',
			assigned_to: 'Assigned to',
			wordpress_field_placeholder: 'WordPress field'
		}
	}
};
export default meta;

export function MappingRowReversedBasic({ ...args }) {
	const inputRef = useRef(null);
	const wordPressFields = defaultMappingOptionsToWordPressField(defaultMappingOptions);
	const [ mapping, setMapping ] = useState(checkValidWordPressFields([
		{
			"airtable": "fldQF3hyuRnmpUP8Z",
			"wordpress": "post::post_title",
			"options": {} as FieldOptions
		},
		{
			"airtable": "",
			"wordpress": "",
			"options": {} as FieldOptions,
			"error": "test",
		},
	], wordPressFields));
	const template = {
		'post::post_content': {
			wordpress: 'post::post_content',
			airtableFieldName: 'Provenance',
			readonly: false,
		} as Mapping,
	};
	const mappingManager = new MappingManagerReversed(
		mapping,
		setMapping,
		fields as AirtableField[],
		wordPressFields,
		defaultMappingOptions,
		isOptionAvailable,
		template
	);
	useEffect(() => {
		if (!inputRef.current) {
			return ;
		}
		const sortableInstance = Sortable.create(inputRef.current, {
			handle: '.airwpsync-c-mapping-row-reversed__btn-sort',
			onUpdate: (evt) => {
				mappingManager.moveMappingRow(evt.oldIndex ?? 0, evt.newIndex ?? 0);
			}
		});

		return () => {
			sortableInstance.destroy();
		};
	}, [ mapping, mappingManager.moveMappingRow ]);

	return <table className="form-table" style={{ width: '100%' }}>
		<MappingRowGroup label="Fields" key="metabox-mapping-body" ref={ inputRef }>
		{
			mappingManager.mapping.length > 0 ?
				mappingManager.mapping.map((mappingRow,index) => {
					return <MappingRowReversed
						key={mappingRow.key}
						texts={args.texts}
						index={index}
						airtableFieldId={mappingRow.airtable}
						wordPressFieldId={mappingRow.wordpress}
						fieldOptions={mappingRow.options}
						error={mappingRow.error}
						mappingManager={mappingManager}
					/>
				})

				: <tr>
					<td>Mapping empty</td>
				</tr>
		}
		</MappingRowGroup>
		<tfoot>
			<tr>
				<td colSpan={4}>
					<button type="button" onClick={() => {
						mappingManager.addMappingRow()
					}}>Add row</button>
				</td>
			</tr>
		</tfoot>
	</table>
;
}

export function MappingRowReversedMixed({ ...args }) {
	const inputRef = useRef(null);
	const wordPressFields = defaultMappingOptionsToWordPressField(defaultMappingOptions);
	const [ mapping, setMapping ] = useState(checkValidWordPressFields([
		{
			"airtable": "fldQF3hyuRnmpUP8Z",
			"airtableFieldName": "Name",
			"wordpress": "post::post_title",
			"options": {} as FieldOptions
		},
		{
			"airtable": "",
			"wordpress": "",
			"options": {} as FieldOptions,
			"error": "test",
		},
	], wordPressFields));
	const template = {
		'post::post_content': {
			wordpress: 'post::post_content',
			airtableFieldName: 'Provenance',
			airtable: 'fldbEUpNqCOrqi0i4',
			readonly: false,
		} as Mapping,
	};
	const mappingManager = new MappingManagerReversed(
		mapping,
		setMapping,
		fields as AirtableField[],
		wordPressFields,
		defaultMappingOptions,
		isOptionAvailable,
		template
	);
	useEffect(() => {
		if (!inputRef.current) {
			return ;
		}
		const sortableInstance = Sortable.create(inputRef.current, {
			handle: '.airwpsync-c-mapping-row-reversed__btn-sort',
			onUpdate: (evt) => {
				mappingManager.moveMappingRow(evt.oldIndex ?? 0, evt.newIndex ?? 0);
			}
		});

		return () => {
			sortableInstance.destroy();
		};
	}, [ mapping, mappingManager.moveMappingRow ]);

	return <table className="form-table" style={{ width: '100%' }}>
		<MappingRowGroup label="Added fields" key="metabox-mapping-body" ref={ inputRef }>
		{
			mappingManager.mapping.length > 0 ?
				mappingManager.mapping.map((mappingRow,index) => {
					if (index === 0) {
						return <MappingRowTemplate
							key={mappingRow.key}
							readOnly={false}
							sortable={true}
							status={ MappingRowTemplateStatus.Idle }
							expectedAirtableFieldName={ mappingRow.airtableFieldName ?? '' }
							wordPressFieldId={ mappingRow.wordpress }
							mappingManager={ (mappingManager as unknown) as MappingManager }
							index={ index }
							texts={ args.texts }
						/>;
					}
					return <MappingRowReversed
						key={mappingRow.key}
						texts={args.texts}
						index={index}
						airtableFieldId={mappingRow.airtable}
						wordPressFieldId={mappingRow.wordpress}
						fieldOptions={mappingRow.options}
						error={mappingRow.error}
						mappingManager={mappingManager}
					/>
				})

				: <tr>
					<td>Mapping empty</td>
				</tr>
		}
		</MappingRowGroup>
		<tfoot>
		<tr>
			<td colSpan={4}>
				<button type="button" onClick={() => {
					mappingManager.addMappingRow()
				}}>Add row</button>
			</td>
		</tr>
		</tfoot>
	</table>
		;
}

