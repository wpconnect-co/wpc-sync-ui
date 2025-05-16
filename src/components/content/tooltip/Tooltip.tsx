import {TooltipProps} from "./Tooltip.types";
import { CircleQuestion } from "../../graphics/icons";
import "./Tooltip.css";
import classnames from "classnames";
import {useId, useState} from "react";

/**
 * @typedef {function(id: string):React.ReactNode} ChildrenFunction
 */

/**
 * Tooltip. <br />
 * Display a tooltip on focus/hover.
 *
 * @param {ChildrenFunction} children Children
 * @param {React.ReactNode} message Tooltip's message.
 * @param {('left' | 'right')} iconPosition Position of the icon (left or right)
 * @param {('top' | 'right')} tooltipPosition Position of the tooltip (left or right)
 * @constructor
 */
const Tooltip = ({ message, children, iconPosition = 'right', tooltipPosition = 'top' }:TooltipProps) => {
	const id = useId();
	const [ isActive, setIsActive ] = useState(false);

	return <span
		className={classnames({
			'airwpsync-c-tooltip': true,
			'airwpsync-c-tooltip--is-active': isActive,
		})}
		onFocus={ () => setIsActive(true) }
		onBlur={ () => setIsActive(false) }
		onMouseOver={ () => setIsActive(true) }
		onMouseOut={ () => setIsActive(false) }
	>
		{ children(id) }
		<span className={classnames({
			'airwpsync-c-tooltip__icon': true,
			'airwpsync-c-tooltip__icon--icon-position-right': 'right' === iconPosition,
			'airwpsync-c-tooltip__icon--icon-position-left': 'left' === iconPosition,
		})}>
			<CircleQuestion/>
			<span
				className={classnames({
					'airwpsync-c-tooltip__message': true,
					'airwpsync-c-tooltip__message--position-top': 'top' === tooltipPosition,
					'airwpsync-c-tooltip__message--position-right': 'right' === tooltipPosition,
				})}
				role="tooltip"
				id={id}
				aria-hidden={!isActive}
			>{message}</span>
		</span>

	</span>
};
export default Tooltip;
