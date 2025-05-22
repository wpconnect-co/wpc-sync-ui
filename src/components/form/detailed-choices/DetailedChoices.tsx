import {DetailedChoicesProps} from "./DetailedChoices.types";
import {useId} from "react";
import "./DetailedChoices.css"
import classnames from "classnames";
import {CircleChecked} from "../../graphics";
const DetailedChoices = ({ legend, choices, selected, onChange }:DetailedChoicesProps) => {
	const fieldSetId = useId();
	return <fieldset className="airwpsync-c-detailed-choices">
		<legend className="screen-reader-text">{ legend }</legend>
		<div className="airwpsync-c-detailed-choices__list">
		{
			choices.map((detailedChoice) => {
				return <label
					className={classnames({
						'airwpsync-c-detailed-choices__choice': true,
						'is-checked': selected === detailedChoice.value
					})}
					key={ detailedChoice.value }
					htmlFor={ `${fieldSetId}_${detailedChoice.value}` }
				>

					<div className="airwpsync-c-detailed-choices__checked-icon"><CircleChecked /></div>
					<input
						className="airwpsync-c-detailed-choices__input screen-reader-text"
						type="radio"
						id={ `${fieldSetId}_${detailedChoice.value}` }
						value={ detailedChoice.value }
						checked={ selected === detailedChoice.value }
						onChange={(e) => {
							onChange(e.target.value)
						}}
					/>
					<div className="airwpsync-c-detailed-choices__choice__label">{ detailedChoice.label }</div>
					<div className="airwpsync-c-detailed-choices__choice__description">{ detailedChoice.description }</div>
				</label>
			})
		}
		</div>
	</fieldset>
};

export default DetailedChoices;
