import {InputProps} from "./Input.types";
import {useId} from "react";
import classnames from "classnames";
import "./Input.css";
import {Info, CircleChecked} from "../../graphics/icons";

export enum InputType {
	Text = 'text',
	Password = 'password',
	Number = 'number',
	Date = 'date',
}

/**
 * Input. <br />
 * Versatile input component. Displays a controlled html input with a label.
 *
 * @param {React.ReactNode} label
 * @param {string} id
 * @param {string} name
 * @param {string} value
 * @param {string} placeholder
 * @param {React.ReactNode} instructions
 * @param {('idle' | 'valid' | 'invalid')} status
 * @param {boolean} disabled
 * @param {('text' | 'password')} type
 * @param {object} ...props Other props from `<input />` React component.
 *
 * @constructor
 */
const Input = ({ label, labelHidden, id, name, value, placeholder, instructions, errorMessage, status = 'idle', disabled = false, type = InputType.Text, ...props }:InputProps) => {
	const altId = useId();
	if (!id) {
		id = altId;
	}
	let icon = null;
	if ('valid' === status) {
		icon = <CircleChecked />
	} else if ('invalid' === status) {
		icon = <Info />
	}

    return (
		<>
			<label
				className={ classnames({
					'airwpsync-c-input__label': true,
					'screen-reader-text': labelHidden,
				}) }
				htmlFor={ id }
			>{ label }</label>
			<div className={ `airwpsync-c-input__input-wrapper` }>
				{ icon ? <div className={ classnames({
					'airwpsync-c-input__input-state-icon': true,
					'airwpsync-c-input__input-state-icon--is-valid': 'valid' === status,
					'airwpsync-c-input__input-state-icon--is-invalid': 'invalid' === status,
					[`airwpsync-c-input__input--${type}`]: true
				}) }>{ icon }</div> : null  }
				<input
					id={ id }
					name={ name }
					className={ classnames({
						'airwpsync-c-input__input': true,
						typeClassModifier: true,
						'airwpsync-c-input__input--is-valid': 'valid' === status,
						'airwpsync-c-input__input--is-invalid': 'invalid' === status,
					})}
					type={ type }
					disabled={ disabled }
					value={ value }
					placeholder={ placeholder }
					{ ...props }
				/>
				{ instructions ? <p className={ `airwpsync-c-input__instructions` }>{ instructions }</p> : null }
				{ errorMessage ? <p className={ `airwpsync-c-input__error-message` }>{ errorMessage }</p> : null }
			</div>
		</>

	);
};
export default Input;
