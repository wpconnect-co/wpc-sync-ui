import {ColumnsProps, ColumnProps} from "./Columns.types";
import "./Columns.css";

/**
 * @typedef {{ size:  (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12), children: {React.ReactNode} }} ColumnProps
 */

/**
 *
 * @param {ColumnProps[]} columns Columns
 * @param {object} ...props Other props for <div> HTML element.
 * @constructor
 */
const Columns = ({ columns, ...props }:ColumnsProps) => {
    return (
        <div
			{ ...props }
			className={ `airwpsync-c-columns ` }
		>{ columns.map(( { size, children }:ColumnProps, index ) => (
			<div key={ index } className={ `airwpsync-c-columns__column airwpsync-c-columns__column--size-${size}` }>{ children }</div>
		)) }</div>
    );
};
export default Columns;
