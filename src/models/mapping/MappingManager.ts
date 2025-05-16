import { arrayMoveImmutable } from 'array-move';
import { v4 as uuidv4 } from 'uuid';
import {
	AirtableField,
	Mapping,
	MappingGroupOptions,
	MappingOption, AirtableSelectFieldGroupOption, AirtableSelectFieldGroupOptions,
	SetMappingSignature,
	SupportedSource, WordPressSelectFieldGroupOptions
} from "./Mapping.types";
import {getAirtableFieldById} from "./helpers";

export default class MappingManager {


	fields:AirtableField[]
	setMapping:SetMappingSignature

	mapping: Mapping[]
	allSupportedAirtableTypes: SupportedSource[]
	private _airtableSelectFieldGroupsOptions:AirtableSelectFieldGroupOptions
	private _wordPressSelectFieldsOptions:WordPressSelectFieldGroupOptions[]
	indexedWordPressFields: Record<string, MappingOption>
	indexedAirtablesFields: Record<string, AirtableField>

	constructor(mappingInit:Mapping[], setMapping:SetMappingSignature, fields:AirtableField[], defaultMappingOptions:MappingGroupOptions, isOptionAvailable:(featurePath:string) => boolean) {
		const self = this;

		this.fields = fields;
		this.setMapping = setMapping;

		this.mapping = mappingInit.map((m) => {
			if (m.key) {
				return m;
			}
			return { ...m, key: uuidv4() } as Mapping;
		});

		this.allSupportedAirtableTypes = Object.keys(defaultMappingOptions).reduce((result, groupName) => {
			result = result.concat(defaultMappingOptions[groupName].options.reduce<string[]>((supported_sources, option) => {
				supported_sources = supported_sources.concat(option.supported_sources);
				return supported_sources;
			}, []));
			return result;
		}, [] as string[]);

		this._airtableSelectFieldGroupsOptions = fields.reduce(function (result, field) {
			if (self.allSupportedAirtableTypes.indexOf(field.type) === -1) {
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

		this._wordPressSelectFieldsOptions = this.mapping.map((field) => {
			const mappingOptions = {} as WordPressSelectFieldGroupOptions;
			const airtableField = getAirtableFieldById(field.airtable, fields);

			// Filter options by post type
			for (const groupName in defaultMappingOptions) {
				const group = defaultMappingOptions[groupName];
				const groupOptions = group.options.filter(function(option) {
					return isOptionAvailable(option.value);
				});
				if (groupOptions.length > 0) {
					mappingOptions[groupName] = { ...group, options: groupOptions };
				}
			}

			// Filter options by supported types
			let airtableType = airtableField ? airtableField.type : '';
			for (const groupName in mappingOptions) {
				const group = mappingOptions[groupName];
				group.options = group.options.filter(function(option) {
					return option.supported_sources.indexOf(airtableType) > -1
				});
				if (group.options.length === 0) {
					delete mappingOptions[groupName];
				}
			}

			const rowValue = field.wordpress ?? null;

			// Check if some options must be disabled
			for (const groupName in mappingOptions) {
				const group = mappingOptions[groupName];
				group.options = group.options.map(function(option) {
					return {
						...option,
						enabled: option.enabled && (option.value === rowValue || !self.isOptionDisabled(option))
					};
				});
			}

			return mappingOptions;
		});

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

	addMappingRow() {
		const airtableFirstOption = this.getAirtableFirstOption();

		this.setMapping([
			...this.mapping,
			{
				airtable: airtableFirstOption,
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
				return {
					...el,
					wordpress: wordPressFieldId
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


	get airtableSelectFieldGroupsOptions(): AirtableSelectFieldGroupOptions {
		return this._airtableSelectFieldGroupsOptions;
	}

	get wordPressSelectFieldsOptions(): WordPressSelectFieldGroupOptions[] {
		return this._wordPressSelectFieldsOptions;
	}

}
