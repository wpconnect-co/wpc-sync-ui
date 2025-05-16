import * as React from "react";
import {IconProps} from "../../../types/icon";
const SvgGrab = ({
	title,
	titleId,
	...props
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={6}
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path fill="currentColor" d="M0 6V4h16v2zm0-4V0h16v2z" />
	</svg>
);
export default SvgGrab;
