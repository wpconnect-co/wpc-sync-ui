import {CalloutProps, PrebuiltCalloutProps} from "./Callout.types";
import {CircleChecked, CircleCross, CircleInfo, TriangleExclamation} from "../../graphics/icons";
import "./Callout.css";
import InlineLoading from "../../graphics/inline-loading/InlineLoading";

/**
 * Callout. <br />
 * Highlight a text and display meaningful icon.
 *
 * @param {React.ReactNode} children Children
 * @param {React.ReactNode} icon An icon (React node)
 * @param {string} iconColor A color from the theme (e.g "primary-50", "black")
 * @param {string} bgColor A color from the theme (e.g "primary-50", "black")
 * @param {('xs' | 'sm' | 'base' | 'lg' | 'xl')} fontSize Font size.
 * @param {('start' | 'center' )} iconAlignment Icon alignment
 * @constructor
 */
const Callout = ({children, icon, iconColor, bgColor, fontSize = 'base', iconAlignment = 'start'}: CalloutProps) => {
	return (
		<div
			className={`airwpsync-c-callout airwpsync-c-callout--icon-align-` + iconAlignment }
			style={{background: `var(--airwpsync--color--${bgColor}`,}}
		>
			<div className={`airwpsync-c-callout__icon `} style={ { color: iconColor ? `var(--airwpsync--color--${iconColor}` : '' } }>{ icon }</div>
			<div className={`airwpsync-c-callout__content airwpsync-t-font-size--${fontSize}`}>{ children }</div>
		</div>
	);
};
export default Callout;


/**
 * Prebuilt callout.
 * Use `type` parameter to display preconfigured Callout component.
 *
 * @param {( 'neutral' | 'success' | 'warning' | 'error' | 'loading' )} type Callout type.
 * @param {React.ReactNode} children Children
 * @param {React.ReactNode} icon An icon (React node)
 * @param {('xs' | 'sm' | 'base' | 'lg' | 'xl')} fontSize Font size.
 * @constructor
 */
export const PrebuiltCallout = ({ type, icon, children, fontSize = 'base', ...props }:PrebuiltCalloutProps) => {
	switch (type) {
		case 'neutral':
			return <Callout icon={ icon } bgColor={ 'primary-50' } { ...props }>{ children }</Callout>;
		case 'info':
			icon = icon ?? <CircleInfo />;
			return <Callout icon={ icon } bgColor={ 'primary-50' } { ...props }>{ children }</Callout>;
		case 'success':
			icon = icon ?? <CircleChecked />;
			return <Callout icon={ icon } iconColor={ 'green-500' } bgColor={ 'green-50' }>{ children }</Callout>;
		case 'warning':
			icon = icon ?? <TriangleExclamation />;
			return <Callout icon={ icon } iconColor={ 'yellow-500' } bgColor={ 'warning-bg' }>{ children }</Callout>;
		case 'error':
			icon = icon ?? <CircleCross />;
			return <Callout icon={ icon } iconColor={ 'error' } bgColor={ 'error-bg' }>{ children }</Callout>;
		case 'loading':
			icon = icon ?? <InlineLoading />;
			return <Callout icon={ icon } iconColor={ 'green-500' } bgColor={ 'primary-50' } fontSize={ fontSize } { ...props }>{ children }</Callout>;
	}
	return null;
}
