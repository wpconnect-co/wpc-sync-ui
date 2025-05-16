import {string} from "prop-types";

export interface Mapping {
	key?: string,
	wordpress: string,
	airtable: string,
	options: FieldOptions,
	airtableFieldName?:string
	readonly?: boolean,
	error?:React.ReactNode
}
export interface FieldOptions {
	name?: string,
	form_options_values?:FormOptionsValues
}
export interface FormOptionsValues {
	[key: string]: string|number;
}

export type SetMappingSignature = (mapping:Mapping[]) => void;

export interface AirtableField {
	id: string,
	name: string,
	value: string,
	type: string,
	group: string,
}

export interface WordPressField extends MappingOption {};

export type SupportedSource = string;
export interface MappingOption {
	supported_sources:  SupportedSource[]
	allow_multiple: boolean,
	value: string,
	enabled: boolean,
	label: string,
	notice?:React.ReactNode,
	form_options?:MappingOptionFormOptions[]
}
export interface MappingOptionFormOptions {
	name: string,
	type: string,
	label: string
}
export interface MappingGroupOption {
	label: string,
	options: MappingOption[],
}
export type MappingGroupOptions = Record<string, MappingGroupOption>

export type AirtableSelectFieldGroupOptions = Record<string, AirtableSelectFieldGroupOption>;
export interface AirtableSelectFieldGroupOption {
	label: string,
	options: AirtableField[]
}

export type WordPressSelectFieldGroupOptions = Record<string, WordPressSelectFieldGroupOption>;
export interface WordPressSelectFieldGroupOption extends MappingGroupOption {

}
