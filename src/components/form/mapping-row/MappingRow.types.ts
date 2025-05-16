import React from "react";
import MappingManager from "../../../models/mapping/MappingManager"
import {FieldOptions} from "../../../models/mapping/Mapping.types"

export interface MappingRowPropsBase extends  React.ComponentPropsWithoutRef<"tr"> {
	index: number,
	airtableFieldId: string,
	wordPressFieldId: string,
	fieldOptions: FieldOptions,
	error?: React.ReactNode
}
export interface MappingRowProps extends  MappingRowPropsBase, React.ComponentPropsWithoutRef<"tr">{
	texts: MappingRowTexts,
	mappingManager: MappingManager,
}
export interface MappingRowTexts {
	custom_field: string; //Custom Field
	import_as:string // Import As
	required_field_indicator: string // " (required)"
	airtable_field: string // "Airtable Field"
	fields: string// __('Fields', 'air-wp-sync')
	sort: string //  __('Sort', 'air-wp-sync')
	remove: string // __('Remove', 'air-wp-sync')
}

