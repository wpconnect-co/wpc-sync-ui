import {PopUpProps} from "./PopUp.types";
import {createPortal} from "react-dom";
import classnames from "classnames";
import "./PopUp.css";

/**
 * @typedef {function(isOpen: boolean):void} SetIsOpenFunction
 */

/**
 * PopUp. <br />
 * Set initial state of the pop-up with `isOpen` prop, pass `setIsOpen` function for the pop-up to be able to close itself.
 *
 * @param {boolean} isOpen Open state.
 * @param {SetIsOpenFunction} setIsOpen Function to toggle isOpen state.
 * @param {React.ReactNode} children Children
 * @constructor
 */
const PopUp = ({ isOpen, setIsOpen, children }:PopUpProps) => {

    return createPortal(
        <div
			className={ classnames({
				'airwpsync-c-pop-up': true,
				'airwpsync-c-pop-up--is-open': isOpen,
			}) }
			onClick={ () => setIsOpen(!isOpen) }
		>
			<div className={ `airwpsync-c-pop-up__inner ` } onClick={ (event) => event.stopPropagation() }>
				{ children }
			</div>
		</div>,
		document.body
    );
};
export default PopUp;
