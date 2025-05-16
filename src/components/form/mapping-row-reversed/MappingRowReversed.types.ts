import {MappingRowPropsBase} from "../mapping-row/MappingRow.types"
import MappingManager from "../../../models/mapping/MappingManager";
import MappingManagerReversed from "../../../models/mapping/MappingManagerReversed";
export interface MappingRowReversedProps extends MappingRowPropsBase {
	texts: MappingRowReversedTexts,
	mappingManager: MappingManagerReversed,
}
export interface MappingRowReversedTexts {
	custom_field: string; //Custom Field
	required_field_indicator: string // " (required)"
	airtable_field: string // "Airtable Field"
	fields: string// __('Fields', 'air-wp-sync')
	sort: string //  __('Sort', 'air-wp-sync')
	remove: string // __('Remove', 'air-wp-sync')
	assigned_to: string // __('Assigned to', 'air-wp-sync')
	wordpress_field_placeholder: string  // __('WordPress field', 'air-wp-sync')
}

