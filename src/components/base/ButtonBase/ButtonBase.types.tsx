import React from "react";
export interface ButtonBaseProps {
	tagName?: string;
	buttonType?: 'primary' | 'secondary' | 'link';
	classModifier?: string;
	children?: React.ReactNode;
	underlined?: boolean;
	fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
}
