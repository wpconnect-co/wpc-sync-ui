import * as React from "react";
import {IconProps} from "../../../types/icon";

const SvgDropdownIndicator = ({
	title,
	titleId,
	...props
}: IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={12}
		height={8}
		viewBox="0 0 12 8"
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path fill="currentColor" d="M10.59.59 6 5.17 1.41.59 0 2l6 6 6-6z" />
	</svg>
);
export default SvgDropdownIndicator;
