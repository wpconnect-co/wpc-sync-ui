import React from "react";

export interface ProgressBarProps  {
	children: (id:string) => React.ReactNode,
	ratio: number,
	color?: string,
	bgColor?: string
}
