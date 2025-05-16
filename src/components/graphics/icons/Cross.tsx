import * as React from "react";
import {IconProps} from "../../../types/icon";
import {useId} from "react";
const SvgCross = ({
	title,
	titleId,
	...props
}: IconProps) => {
	const clipPathId = useId();
	return <svg
		xmlns="http://www.w3.org/2000/svg"
		width={10}
		height={17}
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath={ `url(#${clipPathId})`}>
			<path
				fill="currentColor"
				d="M9.706 11.794a1 1 0 1 1-1.413 1.413L5 9.915l-3.293 3.291A1 1 0 0 1 1 13.5a1 1 0 0 1-.707-1.708l3.294-3.294L.293 5.206a1 1 0 1 1 1.414-1.414L5 7.087l3.294-3.293a1 1 0 1 1 1.414 1.414L6.414 8.5l3.292 3.293Z"
				opacity={0.4}
			/>
		</g>
		<defs>
			<clipPath id={ clipPathId }>
				<path fill="#fff" d="M0 .5h10v16H0z" />
			</clipPath>
		</defs>
	</svg>;
};
export default SvgCross;
