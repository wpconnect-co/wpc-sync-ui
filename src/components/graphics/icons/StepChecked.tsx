import * as React from "react";
import {IconProps} from "../../../types/icon";
const SvgStepChecked = ({
	title,
	titleId,
	...props
} :IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={42}
		height={42}
		viewBox="0 0 42 42"
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<circle
			cx={21}
			cy={21}
			r={19}
			fill="currentColor"
			stroke="currentColor"
			strokeWidth={2}
		/>
		<path
			fill="#fff"
			d="M19.578 25.142 29.22 15.5l1.28 1.28-10.922 10.922-5.079-5.076 1.28-1.28z"
		/>
	</svg>
);
export default SvgStepChecked;
