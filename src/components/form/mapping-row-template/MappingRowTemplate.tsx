import {MappingRowTemplateProps, MappingRowTemplateStatus} from "./MappingRowTemplate.types";
import "./MappingRowTemplate.css"
import {CircleChecked, CircleCross, CircleLoadingAnimation, CircleTrash, Grab} from "../../graphics";
import Input from "../input/Input";
import React from "react";

export default function MappingRowTemplate({ texts, status, index, expectedAirtableFieldName, wordPressFieldId, mappingManager, errorMessage, readOnly = false, sortable = false, ...props }:MappingRowTemplateProps) {
	const wordPressField = mappingManager.getWordPressFieldById(wordPressFieldId);
	const removeMappingRowHandler = () => {
		mappingManager.removeMappingRow(index)
	};
	let statusIndicator = null;
	switch (status) {
		case MappingRowTemplateStatus.Valid:
			statusIndicator = <CircleChecked style={{color: 'var(--airwpsync--color--green-500)'}} />
			break;
		case MappingRowTemplateStatus.Loading:
			statusIndicator = <CircleLoadingAnimation style={{color: 'var(--airwpsync--color--primary)'}} />
			break;
		case MappingRowTemplateStatus.Invalid:
			statusIndicator = <CircleCross style={{color: 'var(--airwpsync--color--error)'}} />
			break;
	}
	if (!statusIndicator && sortable) {
		statusIndicator = <div
			className="airwpsync-c-mapping-row-template__btn-sort airwpsync-u-reset-btn"
		>
			<span className="screen-reader-text">{texts.sort}</span>
			<Grab/>
		</div>;
	}
	const {className, ...otherProps} = props;
	return <tr className={`airwpsync-c-mapping-row-template ${className ?? ''}`} {...otherProps}>
		<td className="airwpsync-c-mapping-row-template__wordpress-field-col">
			<div className="airwpsync-c-mapping-row-template__wordpress-field">
				{ statusIndicator }
				{ wordPressField.label }
			</div>
		</td>
		<td className="airwpsync-c-mapping-row-template__assigned-to">
			{ texts.assigned_to }
		</td>
		<td className="airwpsync-c-mapping-row-template__airtable-field-col">
			{
				<Input label={''} value={expectedAirtableFieldName} readOnly={true} status={status === 'invalid' ? status : 'idle'} errorMessage={ errorMessage }/>
			}
		</td>
		<td className="airwpsync-c-mapping-row-template__flex">
			{
				!readOnly ?
					<button
						type="button"
						className="airwpsync-c-mapping-row-template__remove-btn airwpsync-u-reset-btn"
						onClick={removeMappingRowHandler}><span className="screen-reader-text">{texts.remove}</span>
						<CircleTrash/>
					</button>
					: null
			}

		</td>
	</tr>
};
