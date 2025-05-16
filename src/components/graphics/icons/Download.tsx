import * as React from "react";
import {IconProps} from "../../../types/icon";
import {useId} from "react";
const SvgDownload = ({
	title,
	titleId,
	...props
}: IconProps) => {
	const clipPathId = useId();
	return <svg
		xmlns="http://www.w3.org/2000/svg"
		width={16}
		height={16}
		fill="none"
		aria-labelledby={titleId}
		{...props}
	>
		{title ? <title id={titleId}>{title}</title> : null}
		<g clipPath={`url(#${clipPathId})`}>
			<path
				fill="currentColor"
				d="M2 6.003a1 1 0 0 1 1.707-.71L8 9.602l4.294-4.307a1 1 0 0 1 1.414 0c.39.392.39 1.027 0 1.419l-5 5.014a1 1 0 0 1-1.414 0l-5-5.014A1 1 0 0 1 2 6.003"/>
			<path
				fill="currentColor"
				d="M7 11.05v-9.1C7 1.424 7.447 1 8 1s1 .425 1 .95v9.1L8 12z"
				opacity={0.4}
			/>
			<path fill="currentColor" d="M12.615 15H3a1.001 1.001 0 1 1 0-2h9.615l1.003 1z"/>
			<path fill="currentColor" d="M3.003 13h9.616a1.001 1.001 0 1 1 0 2H3.003L2 14z"/>
		</g>
		<defs>
			<clipPath id={clipPathId}>
				<path fill="#fff" d="M16 .98v14.04H0V.98z"/>
			</clipPath>
		</defs>
	</svg>;
};
export default SvgDownload;
