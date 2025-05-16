import {buttonPropsModifier} from "../../base/ButtonBase/ButtonBase";
import {ButtonLinkProps} from "./ButtonLink.types";
import "../../base/ButtonBase/ButtonBase.css";


/**
 * ButtonLink.
 * Display a link ("<a>" tag) with a default classname. Accepts other props from React `<a>` component.
 *
 * @param {React.ReactNode} children Children
 * @param {string} classModifier CSS class modifier (e.g "airwpsync-c-button--icon")
 * @param {('primary' | 'secondary' | 'link')} buttonType Button style type.
 * @param {underlined} Underlined? (default true if buttonType is "link")
 * @param {object} props Other HTML button props.
 *
 * @constructor
 */
const ButtonLink = ({ children, classModifier, underlined, fontSize, buttonType = 'primary', ...props }:ButtonLinkProps) => {
	const buttonBaseProps = buttonPropsModifier({ children, classModifier, underlined, buttonType, fontSize })
    return (
        <a
			{ ...buttonBaseProps }
			{ ...props }
		>{ children }</a>
    );
};
export default ButtonLink;
