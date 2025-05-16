import {RowProps} from "./FormRow.types";
import "./FormRow.css";

/**
 * FormRow. <br />
 * Manages spacing between form elements within the form row.
 *
 * @param {React.ReactNode} children Children
 *
 * @constructor
 */
const FormRow = ({ children, className, ...props }:RowProps) => {
    return (
		<div className={`airwpsync-c-form-row ${className ?? ''}`} { ...props }>
			{ children }
		</div>

	);
};
export default FormRow;
