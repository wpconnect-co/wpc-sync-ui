import * as React from "react";
import {IconProps} from "../../../types/icon";
import {useId} from "react";

const SvgCircleTrash = ({
	title,
	titleId,
	...props
}: IconProps) => {
	const clipPathId = useId();
	return <svg
		xmlns="http://www.w3.org/2000/svg"
		width={20}
		height={20}
		viewBox="0 0 20 20"
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath={ `url(#${clipPathId})` }>
			<rect width={20} height={20} fill="#fff" rx={10}/>
			<path
				fill="currentColor"
				d="m7.867 5 .442-.441a.6.6 0 0 1 .406-.184h2.535c.164 0 .324.066.441.184l.442.441h1.617c.344 0 .625.281.625.625a.627.627 0 0 1-.625.625H6.215c-.309 0-.625-.281-.625-.625S5.906 5 6.215 5zm5.883 2.5-.531 6.355A1.247 1.247 0 0 1 11.977 15H8.023c-.648 0-1.191-.5-1.242-1.145L6.25 7.5zM20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10M10 1.875A8.124 8.124 0 0 0 1.875 10 8.124 8.124 0 0 0 10 18.125 8.124 8.124 0 0 0 18.125 10 8.124 8.124 0 0 0 10 1.875"
			/>
		</g>
		<defs>
			<clipPath id={clipPathId}>
				<rect width={20} height={20} fill="#fff" rx={10}/>
			</clipPath>
		</defs>
	</svg>;
};
export default SvgCircleTrash;
