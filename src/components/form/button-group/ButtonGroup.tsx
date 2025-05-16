import {ButtonGroupProps} from "./ButtonGroup.types";
import "./ButtonGroup.css";

/**
 *
 * @param {React.ReactNode} children Children
 * @param {(10 | 16 | 24)} gap Gap size
 * @constructor
 */
const ButtonGroup = ({ children, gap = 10 }:ButtonGroupProps) => {
    return (
        <div
			className={ `airwpsync-c-button-group airwpsync-c-button-group--gap-${gap}` }
		>{ children }</div>
    );
};
export default ButtonGroup;
