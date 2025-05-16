import {PanelProps} from "./Panel.types";
import "./Panel.css";

/**
 * Panel.
 * @param {React.ReactNode} children Children
 * @constructor
 */
const Panel = ({ children }:PanelProps) => {
    return (
        <div
			className={ `airwpsync-c-panel ` }
		>{ children }</div>
    );
};
export default Panel;
