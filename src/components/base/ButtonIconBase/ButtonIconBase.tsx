import {ButtonIconBaseProps} from "./ButtonIconBase.types";
import React from "react";
import {ArrowRight, ArrowLeft, OpenExternal, NewConnection, Verify, Cross, Sync, Download} from "../../graphics/icons";
import "./ButtonIconBase.css";
import {CircleLoadingAnimation} from "../../graphics";

/**
 * Modify props to include icon.
 *
 * @param {React.ReactNode} children Children
 * @param {( 'arrow-right' | 'arrow-left' | 'open-external' | 'new-connection' | 'verify' | 'circle-loading' | 'cross' | 'sync' | 'download' )} icon Button's icon.
 * @param {('before' | 'after')} iconPos Icon position.
 * @param {object} ...props Other HTML tag props.
 *
 * @constructor
 */
export function buttonIconPropsModifier({ children, classModifier, icon, iconPos = 'after', ...props }:ButtonIconBaseProps) {
	let iconComponent: React.JSX.Element|null = null;
	switch (icon) {
		case 'arrow-right':
			iconComponent = <ArrowRight className="airwpsync-b-button__icon" />;
			break;
		case 'arrow-left':
			iconComponent = <ArrowLeft className="airwpsync-b-button__icon" />;
			break;
		case 'open-external':
			iconComponent = <OpenExternal className="airwpsync-b-button__icon" />;
			break;
		case 'new-connection':
			iconComponent = <NewConnection className="airwpsync-b-button__icon" />;
			break;
		case 'verify':
			iconComponent = <Verify className="airwpsync-b-button__icon" />;
			break;
		case 'circle-loading':
			iconComponent = <CircleLoadingAnimation className="airwpsync-b-button__icon" />;
			break;
		case 'cross':
			iconComponent = <Cross className="airwpsync-b-button__icon" />;
			break;
		case 'sync':
			iconComponent = <Sync className="airwpsync-b-button__icon" />;
			break;
		case 'download':
			iconComponent = <Download className="airwpsync-b-button__icon" />;
			break;
	}
	children = <><div>{ children }</div>{ iconComponent }</>;
	classModifier = classModifier ?? '';

	return {
		classModifier: `airwpsync-b-button--icon airwpsync-b-button--icon-${iconPos} ${classModifier}`,
		children,
		...props
	};
}
