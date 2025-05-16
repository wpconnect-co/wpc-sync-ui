import React from "react";
import MappingManager from "../../../models/mapping/MappingManager"

export interface MappingRowTemplateProps extends  React.ComponentPropsWithoutRef<"tr">{
	readOnly: boolean,
	status: MappingRowTemplateStatus,
	expectedAirtableFieldName: string,
	wordPressFieldId: string,
	mappingManager: MappingManager,
	errorMessage?: string,
	index: number,
	texts: MappingRowTemplateTexts,
	sortable?: boolean
}
export enum MappingRowTemplateStatus {
	Idle = 'idle',
	Valid = 'valid',
	Invalid = 'invalid',
	Loading = 'loading',
}
export interface MappingRowTemplateTexts {
	assigned_to: string; // __('Assigned to', 'air-wp-sync')
	remove: string; // __('Remove', 'air-wp-sync')
	sort: string; // __('Sort', 'air-wp-sync')
}
