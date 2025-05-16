import * as React from "react";
import {useId} from "react";
import {IconProps} from "../../../types/icon";
const SvgCircleLoading = ({
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
		<g fill="currentColor" clipPath={`url(#${clipPathId})`}>
			<circle cx={10} cy={2.375} r={1.875} fillOpacity={0.1} />
			<circle
				cx={10}
				cy={18.625}
				r={1.875}
				fillOpacity={0.65}
				opacity={0.45}
			/>
			<circle cx={1.875} cy={10.5} r={1.875} fillOpacity={0.85} />
			<circle cx={18.125} cy={10.5} r={1.875} fillOpacity={0.35} />
			<circle cx={16.25} cy={4.875} r={1.875} fillOpacity={0.25} />
			<circle cx={16.25} cy={16.125} r={1.875} fillOpacity={0.45} />
			<circle cx={3.75} cy={16.125} r={1.875} fillOpacity={0.75} />
			<circle cx={3.75} cy={4.875} r={1.875} />
		</g>
		<defs>
			<clipPath id={clipPathId}>
				<path fill="#fff" d="M0 .5h20v20H0z" />
			</clipPath>
		</defs>
	</svg>
};
export default SvgCircleLoading;
