import Button from "../button/Button";
import {ButtonIconProps} from "./ButtonIcon.types";
import { buttonIconPropsModifier } from "../../base/ButtonIconBase/ButtonIconBase";

/**
 * ButtonIcon. <br />
 * Display a button with an icon defined by the `icon` property.
 *
 * @param {React.ReactNode} children Children
 * @param {( 'arrow-right' | 'arrow-left' | 'open-external' | 'new-connection' | 'verify' | 'circle-loading' | 'cross' )} icon Button's icon.
 * @param {('before' | 'after')} iconPos Icon position.
 * @param {object} ...props Other HTML button props.
 *
 * @constructor
 */
export default function ButtonIcon({ children, icon, iconPos, ...props }:ButtonIconProps) {
	const buttonIconProps = buttonIconPropsModifier({ children, icon, iconPos, ...props });
	return <Button { ...buttonIconProps } />;
}

