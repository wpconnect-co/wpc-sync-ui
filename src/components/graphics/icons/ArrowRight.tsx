import * as React from "react";
import {IconProps} from "../../../types/icon";
import {useId} from "react";
const SvgArrowRight = ({ title, titleId, ...props }:IconProps) => {
	const clipPathId = useId();
	return <svg
		xmlns="http://www.w3.org/2000/svg"
		width={15}
		height={17}
		viewBox="0 0 15 17"
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g fill="currentColor" clipPath={ `url(#${clipPathId})` }>
			<path
				d="M8.023 14.977a1 1 0 0 1-.709-1.707l4.307-4.293-4.306-4.293a1 1 0 0 1 0-1.414 1.005 1.005 0 0 1 1.418 0l5.015 5a1 1 0 0 1 0 1.414l-5.015 5a1 1 0 0 1-.71.293"/>
			<path
				d="M10.618 9.978H1.003a1 1 0 1 1 0-2h9.615l1.003 1z"
				opacity={0.4}
			/>
		</g>
		<defs>
			<clipPath id={ clipPathId }>
				<path fill="#fff" d="M0 .978h14.041v16H0z"/>
			</clipPath>
		</defs>
	</svg>;
};
export default SvgArrowRight;
