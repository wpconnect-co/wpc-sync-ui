import { arrayMoveImmutable } from 'array-move';
import { v4 as uuidv4 } from 'uuid';
import {
	AirtableField,
	Mapping,
	MappingGroupOptions,
	MappingOption, AirtableSelectFieldGroupOption, AirtableSelectFieldGroupOptions,
	SetMappingSignature,
	SupportedSource, WordPressSelectFieldGroupOptions, WordPressField
} from "./Mapping.types";

export default class MappingManagerReversed {


	fields:AirtableField[]
	wordPressFields:WordPressField[]
	setMapping:SetMappingSignature

	mapping: Mapping[]
	allSupportedAirtableTypes: SupportedSource[]
	private _airtableSelectFieldGroupsOptions:AirtableSelectFieldGroupOptions[]
	private _wordPressSelectFieldsOptions:WordPressSelectFieldGroupOptions
	indexedWordPressFields: Record<string, MappingOption>
	indexedAirtablesFields: Record<string, AirtableField>

	template:Record<string, Mapping>|null

	constructor(mappingInit:Mapping[], setMapping:SetMappingSignature, fields:AirtableField[], wordPressFields:WordPressField[], defaultMappingOptions:MappingGroupOptions, isOptionAvailable:(featurePath:string) => boolean, template:Record<string, Mapping>|null = null) {
		const self = this;
		this.fields = fields;
		this.wordPressFields = wordPressFields;
		this.setMapping = setMapping;

		this.mapping = mappingInit.map((m) => {
			if (m.key) {
				return m;
			}
			return { ...m, key: uuidv4() } as Mapping;
		});
		this.template = template;

		this.allSupportedAirtableTypes = Object.keys(defaultMappingOptions).reduce((result, groupName) => {
			result = result.concat(defaultMappingOptions[groupName].options.reduce<string[]>((supported_sources, option) => {
				supported_sources = supported_sources.concat(option.supported_sources);
				return supported_sources;
			}, []));
			return result;
		}, [] as string[]);

		this.indexedWordPressFields = Object.keys(defaultMappingOptions).reduce(function (result, groupName) {
			defaultMappingOptions[groupName].options.forEach((field) => {
				result[field.value] = field;
			}, []);
			return result
		}, {} as Record<string, MappingOption>);

		this.indexedAirtablesFields = fields.reduce(function (result, airtableField) {
			result[airtableField.id] = airtableField;
			return result
		}, {} as Record<string, AirtableField>);

		this._airtableSelectFieldGroupsOptions = this.mapping.map((fieldMapping) => {
			return fields.reduce(function (result, field) {
				const wordPressField = self.getWordPressFieldById(fieldMapping.wordpress);
				if (wordPressField && wordPressField.supported_sources.indexOf(field.type) === -1) {
					return result;
				}
				const group = field.group;
				if (!( group in result )) {
					result[group] = {
						label: group,
						options: []
					} as AirtableSelectFieldGroupOption;
				}

				result[group].options.push(field);
				return result;
			}, {} as AirtableSelectFieldGroupOptions);
		}, []);

		const wordPressFieldsSelected = this.mapping.map(( fieldMapping) => {
			return fieldMapping.wordpress;
		}, []);

		this._wordPressSelectFieldsOptions = Object.keys(defaultMappingOptions).reduce((mappingOptions, groupName) => {
			const group = { ...defaultMappingOptions[groupName] };
			const groupOptions = group.options.filter(function(option) {
				return isOptionAvailable(option.value);
			});
			if (groupOptions.length === 0) {
				return mappingOptions;
			}

			mappingOptions[groupName] = group;

			group.options = group.options.map(function(option) {
				return {
					...option,
					enabled: option.enabled && (wordPressFieldsSelected.indexOf(option.value) === -1 || option.allow_multiple)
				};
			});

			return mappingOptions;
		}, {} as WordPressSelectFieldGroupOptions);


	}

	isOptionDisabled(option:MappingOption) {
		if (option.allow_multiple) {
			return false;
		}
		return this.mapping.reduce(function(result, current) {
			return current.wordpress && current.wordpress === option.value ? true : result;
		}, false);
	}


	getAirtableFirstOption() {
		return this.fields.length > 0 ? this.fields[0].id : '';
	}

	getWordPressFirstOption() {
		return this.wordPressFields.length > 0 ? this.wordPressFields[0].value : '';
	}

	addMappingRow() {
		const wordPressFirstOption = this.getWordPressFirstOption();

		this.setMapping([
			...this.mapping,
			{
				airtable: '',
				wordpress: '',
				options: {},
				key: uuidv4()
			} as Mapping
		]);
	};

	updateAirtableField(index:number, airtableFieldId:string) {
		this.setMapping(this.mapping.map((el, i) => {
			if (i === index) {
				return {
					...el,
					airtable: airtableFieldId
				};
			}
			return el;
		}));
	};
	updateWordPressField(index:number, wordPressFieldId:string) {
		this.setMapping(this.mapping.map((el, i) => {
			if (i === index) {
				let airtable = el.airtable;
				// Check if we can automatically map to an airtable field.
				if (wordPressFieldId && airtable === '' && this.template && this.template[wordPressFieldId]) {
					airtable = this.template[wordPressFieldId].airtable;
				}
				return {
					...el,
					wordpress: wordPressFieldId,
					airtable
				};
			}
			return el;
		}));
	};
	updateFieldOption(index:number, optionName:string, optionValue:any) {
		this.setMapping(this.mapping.map((el, i) => {
			if (i === index) {
				return {
					...el,
					options: {
						...el.options,
						[optionName]: optionValue
					}
				};
			}
			return el;
		}));
	};
	removeMappingRow(index:number) {
		this.setMapping(this.mapping.filter((el, i) => i !== index));
	};

	moveMappingRow(oldIndex:number, newIndex:number) {
		this.setMapping( arrayMoveImmutable(this.mapping, oldIndex, newIndex) );
	};


	getWordPressFieldById(wordPressFieldId:string) {
		return this.indexedWordPressFields[wordPressFieldId]
	};

	getAirtableFieldById(airtableFieldId:string) {
		return this.indexedAirtablesFields[airtableFieldId]
	};


	get airtableSelectFieldGroupsOptions(): AirtableSelectFieldGroupOptions[] {
		return this._airtableSelectFieldGroupsOptions;
	}

	get wordPressSelectFieldsOptions(): WordPressSelectFieldGroupOptions {
		return this._wordPressSelectFieldsOptions;
	}

}
