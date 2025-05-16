import ButtonLink from "../button-link/ButtonLink";
import {buttonIconPropsModifier} from "../../base/ButtonIconBase/ButtonIconBase";
import {ButtonLinkIconProps} from "./ButtonLinkIcon.types";

/**
 * ButtonLinkIcon. <br />
 * Display a link (`<a>`) with an icon defined by the `icon` property.
 *
 * @param {React.ReactNode} children Children
 * @param {( 'arrow-right' | 'arrow-left' | 'open-external' | 'new-connection' | 'verify' | 'circle-loading' | 'cross' | 'sync' | 'download' )} icon Button's icon.
 * @param {('before' | 'after')} iconPos Icon position.
 * @param {object} ...props Other HTML button props.
 *
 * @constructor
 */
export default function ButtonLinkIcon({ children, icon, iconPos, ...props }:ButtonLinkIconProps) {
	const buttonIconProps = buttonIconPropsModifier({ children, icon, iconPos, ...props });
	return <ButtonLink { ...buttonIconProps } />;
};
