import React from "react";
import {MappingRowProps} from "./MappingRow.types";
import { v4 as uuidv4 } from 'uuid';
import {MappingOption} from "../../../models/mapping/Mapping.types";

export default function MappingRow({ texts, index, airtableFieldId, wordPressFieldId, fieldOptions, mappingManager, ...props }:MappingRowProps) {

	const airtableFieldDisabled = Object.keys(mappingManager.airtableSelectFieldGroupsOptions).length === 0; // || loadingDatabasesAndPages;
	let wordPressFieldConfig = {} as MappingOption;
	if (wordPressFieldId) {
		wordPressFieldConfig = mappingManager.getWordPressFieldById(wordPressFieldId) ?? {};
	}
	const airtableFieldChangedHandler = (e: React.FormEvent<HTMLSelectElement>) => {
		const target = e?.target as HTMLSelectElement;
		mappingManager.updateAirtableField(index, target.value)
	};

	const wordPressFieldChangedHandler = (e: React.FormEvent<HTMLSelectElement>) => {
		const target = e?.target as HTMLSelectElement;
		mappingManager.updateWordPressField(index, target.value);
	};

	const customFieldOptionChangedHandler = (e: React.FormEvent<HTMLInputElement>) => {
		const target = e?.target as HTMLInputElement;
		mappingManager.updateFieldOption(index, 'name', target.value);
	};

	const removeMappingRowHandler = () => {
		mappingManager.removeMappingRow(index)
	};

	const renderCustomFieldOptions = () => {
		return <div className="airwpsync-field form-required">
			<label htmlFor={ "customfield_" + airtableFieldId }>
				<span>{ texts.custom_field }</span>
				<span className="airwpsync-required" aria-hidden="true"> *</span>
				<span className="screen-reader-text">{ texts.required_field_indicator }</span>
			</label>
			<input
				id={"customfield_" + airtableFieldId}
				value={ fieldOptions.name ?? '' }
				type="text"
				name={"customfield[" + airtableFieldId + "]"}
				className="airwpsync-input regular-text ltr"
				onChange={ customFieldOptionChangedHandler }
			/>
		</div>;
	};

	return <tr { ...props }>
		<td>
			<div className="airwpsync-field form-required">
				<label>
					<span>{ texts.airtable_field }</span>
					<span className="airwpsync-required" aria-hidden="true">*</span>
					<span className="screen-reader-text">{ texts.required_field_indicator }</span>
				</label>
				<select name="airtable[]"  className="airwpsync-input regular-text ltr" value={ airtableFieldId } disabled={ airtableFieldDisabled } onChange={ airtableFieldChangedHandler }>
					{
						Object.keys(mappingManager.airtableSelectFieldGroupsOptions).map((groupKey) => {
							const group = mappingManager.airtableSelectFieldGroupsOptions[groupKey];
							const groupLabel = group.label ?? texts.fields;
							return <optgroup key={uuidv4()} label={groupLabel}>
								{
									group.options.map((f) => {
										return <option key={uuidv4()} value={f.id}>{f.name}</option>
									})
								}
							</optgroup>;
						})
					}
				</select>
			</div>
		</td>
		<td>
			<div className="airwpsync-field form-required">
				<label>
					<span>{ texts.import_as }</span>
					<span className="airwpsync-required" aria-hidden="true">*</span>
					<span className="screen-reader-text">{ texts.required_field_indicator }</span>
				</label>
				<select name="wordpress[]" className="airwpsync-input regular-text ltr" value={ wordPressFieldId } onChange={ wordPressFieldChangedHandler }>
					<option key="default" value=""></option>
					{
						Object.keys(mappingManager.wordPressSelectFieldsOptions[index]).map((groupKey) => {
							const group = mappingManager.wordPressSelectFieldsOptions[index][groupKey];
							return <optgroup key={ uuidv4() } label={ group.label }>
								{
									group.options.map((option) => {
										return <option key={ uuidv4() } value={ option.value } disabled={ !option.enabled }>{ option.label }</option>
									})
								}
							</optgroup>;
						})
					}
				</select>
			</div>
			{ wordPressFieldConfig.notice ? <small>{ wordPressFieldConfig.notice }</small> : null }
			{ wordPressFieldId && wordPressFieldId.split('::')[1] === 'custom_field' ? renderCustomFieldOptions() : null }
		</td>
		<td className="airwpsync-c-mapping-row__actions">
			<div className="airwpsync-c-mapping-row__btn-sort btn btn-sort dashicons-before dashicons-menu">
				<span className="screen-reader-text">{ texts.sort }</span>
			</div>
			<button type="button" className="airwpsync-c-mapping-row__btn-remove btn btn-remove" onClick={ removeMappingRowHandler }>
				<span className="btn-remove-close-icon" aria-hidden="true">&times;</span>
				<span className="screen-reader-text">{ texts.remove }</span>
			</button>
		</td>
	</tr>;
}
