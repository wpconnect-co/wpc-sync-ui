import * as React from "react";
import {IconProps} from "../../../types/icon";
import {useId} from "react";
const SvgCircleChecked = ({
	title,
	titleId,
	...props
}:IconProps) => {
	const clipPathId = useId();
	return <svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 20 21"
		width={20}
		height={21}
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g fill="currentColor" clipPath={ `url(#${clipPathId})` }>
			<path
				d="M14.523 7.227a1.096 1.096 0 0 1 0 1.546l-5 5a1.096 1.096 0 0 1-1.546 0l-2.5-2.5a1.096 1.096 0 0 1 0-1.546 1.096 1.096 0 0 1 1.546 0l1.727 1.726 4.227-4.226a1.096 1.096 0 0 1 1.546 0"/>
			<path
				d="M0 10.5C0 4.977 4.477.5 10 .5s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10m14.523-1.727a1.096 1.096 0 0 0 0-1.546 1.096 1.096 0 0 0-1.546 0L8.75 11.453 7.023 9.727a1.096 1.096 0 0 0-1.546 0 1.096 1.096 0 0 0 0 1.546l2.5 2.5a1.096 1.096 0 0 0 1.546 0z"
				opacity={0.4}
			/>
		</g>
		<defs>
			<clipPath id={ clipPathId }>
				<path fill="#fff" d="M0 .5h20v20H0z"/>
			</clipPath>
		</defs>
	</svg>
};
export default SvgCircleChecked;
