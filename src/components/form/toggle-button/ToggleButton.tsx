import {ToggleButtonProps} from "./ToggleButton.types";
import "./ToggleButton.css";
import {useId} from "react";
import {CircleChecked} from "../../graphics";
import classnames from "classnames";
/**
 * ToggleButton.
 * Display a toggle button (html checkbox). Accepts other props from React `<input>` component.
 *
 * @param {boolean} checked Checked?
 * @param {boolean} disabled Disabled checkbox prop.
 * @param {object} ...props Other HTML checkbox props.
 *
 * @constructor
 */
const ToggleButton = ({ label, checked = false, disabled = false, ...props }:ToggleButtonProps) => {
	const id = useId();
    return <div className={ classnames({
		'airwpsync-c-toggle-button': true,
		'airwpsync-c-toggle-button--checked': checked,
		'airwpsync-c-toggle-button--unchecked': !checked,
		'airwpsync-c-toggle-button--disabled': disabled,
	}) }>
        <input type="checkbox"
			id={id}
			className={ `airwpsync-c-toggle-button__input screen-reader-text ` }
			disabled={ disabled }
			checked={ checked }
			{ ...props }
		/>
		<label htmlFor={id} className={`airwpsync-c-toggle-button__label-wrapper `}>
			<div className={`airwpsync-c-toggle-button__checked-indicator `}>
				<div className="airwpsync-c-toggle-button__checked-indicator__pusher"></div>
				<CircleChecked className="airwpsync-c-toggle-button__checked-indicator__icon"/>
			</div>
			<div className={`airwpsync-c-toggle-button__label `}>{ label }</div>
		</label>
	</div>;
};
export default ToggleButton;
