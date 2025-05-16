import {
	AirtableField,
	Mapping,
	MappingGroupOption,
	MappingGroupOptions,
	MappingOption,
	WordPressField
} from "./Mapping.types";


/**
 *
 * @param {MappingGroupOptions} defaultMappingOptions Default mapping options.
 * @return WordPressField[]
 */
export function defaultMappingOptionsToWordPressField(defaultMappingOptions:MappingGroupOptions) {
	return Object.keys(defaultMappingOptions).reduce(function (wordPressFields, mappingOptionKey ) {
		const mappingOption:MappingGroupOption = defaultMappingOptions[mappingOptionKey];
		return (wordPressFields.concat(mappingOption.options)) as WordPressField[];
	}, [] as WordPressField[]);
}

export function getAirtableFieldById(airtableId:string, fields:AirtableField[]):AirtableField|undefined {
	return fields.find(function(field) {
		return field.id === airtableId;
	});
}

export function getWordpressFieldById(wordPressId:string, fields:WordPressField[]):WordPressField|undefined {
	return fields.find(function(field) {
		return field.value === wordPressId;
	});
}



/**
 * Filter out invalid mapping fields.
 *
 * @param Mapping[] mapping Fields mapping.
 * @param AirtableField[] fields Airtable fields.
 * @returns Mapping[]
 */
export function checkValidAirtableFields(mapping:Mapping[], fields:AirtableField[]) {
	return mapping.filter((field) => {
		return !!getAirtableFieldById(field.airtable, fields);
	})
}


/**
 * Filter out invalid mapping fields.
 *
 * @param Mapping[] mapping Fields mapping.
 * @param WordPressField[] fields WordPress fields.
 * @returns Mapping[]
 */
export function checkValidWordPressFields(mapping:Mapping[], fields:WordPressField[]) {
	return mapping.filter((field) => {
		return field.wordpress === '' || !!getWordpressFieldById(field.wordpress, fields);
	})
}
