import React from "react";

export interface StepIndex {
	stepKey: string,
	title: string,
}
export interface StepsIndexProps extends React.ComponentPropsWithoutRef<"ol"> {
    steps: StepIndex[],
	currentStepKey: string,
	stepsDone?: string[]
}
