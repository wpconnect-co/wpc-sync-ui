import {MappingRowGroupProps} from "./MappingRowGroup.types";
import "./MappingRowGroup.css"
import {forwardRef} from "react";

const MappingRowTemplate = forwardRef<HTMLTableSectionElement, MappingRowGroupProps>(({ label, children, ...props }:MappingRowGroupProps, ref) => {
	return <tbody className="airwpsync-c-mapping-row-group" { ...props } ref={ ref }>
		<tr><th className="airwpsync-c-mapping-row-group__heading" colSpan={4}>{ label }</th></tr>
		{ children }
	</tbody>
});

export default MappingRowTemplate;

