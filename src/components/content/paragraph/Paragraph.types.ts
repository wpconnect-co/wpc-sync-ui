import React from "react";

export interface ParagraphProps extends React.ComponentPropsWithoutRef<"p"> {
	weight?: 'bold' | 'medium';
	fontSize?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
	color?: string;
    children: React.ReactNode;
}
