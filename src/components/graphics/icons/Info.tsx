import * as React from "react";
import {IconProps} from "../../../types/icon";
const SvgInfo = ({
	title,
	titleId,
	...props
}:IconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		viewBox="0 0 20 20"
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<path
			fill="currentColor"
			d="M9 7h2V5H9m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18a10 10 0 1 0 0 20 10 10 0 0 0 0-20M9 15h2V9H9z"
		/>
	</svg>
);
export default SvgInfo;
