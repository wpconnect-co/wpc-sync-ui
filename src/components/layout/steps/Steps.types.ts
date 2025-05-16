export interface StepProps {
	stepKey: string,
	children: React.ReactNode
}
export interface StepsProps {
	currentStepKey: string,
	steps: StepProps[];
}

export interface StepPropsInherited extends StepProps {
	currentStepKey: string,
}
