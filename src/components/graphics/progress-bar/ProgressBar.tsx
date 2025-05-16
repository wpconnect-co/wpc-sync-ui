import { ProgressBarProps } from "./ProgressBar.types";
import "./ProgressBar.css";
import {useId} from "react";

const ProgressBar = ({ children, ratio, color = 'yellow-500', bgColor = 'yellow-100' }:ProgressBarProps) => {
	const id = useId();

	return <div className="airwpsync-c-progress-bar" style={ {
		'--airwpsync--progress-bar-bgcolor': `var(--airwpsync--color--${bgColor})`,
		'--airwpsync--progress-bar-color': `var(--airwpsync--color--${color})`
	} as React.CSSProperties }>
		{ children(id) }
		{ /* @ts-ignore */ }
		<div className="airwpsync-c-progress-bar__bar" role="meter" aria-valuenow={ ratio * 100 } aria-valuemin="0" aria-valuemax="100" aria-labelledby={ id }>
			<div className="airwpsync-c-progress-bar__inner" style={ { '--airwpsync--progress-bar-percentage': (ratio * 100) + '%' } as React.CSSProperties }></div>
		</div>
	</div>;
};
export default ProgressBar;
