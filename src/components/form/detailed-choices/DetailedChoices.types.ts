export interface DetailedChoicesProps {
	legend: string,
	choices: Array<DetailedChoice>,
	selected: string,
	onChange: onChange
}

export interface DetailedChoice {
	label: React.ReactNode,
	description: React.ReactNode,
	value: string
}

interface onChange { (value: string): void }
