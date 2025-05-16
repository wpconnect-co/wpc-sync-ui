import { Meta } from "@storybook/react";
import Steps, { getNextKey, getPrevKey } from "./Steps";
import Heading from "../../content/heading/Heading";
import { useArgs } from "@storybook/preview-api";
import Button from "../../form/button/Button";
import ButtonGroup from "../../form/button-group/ButtonGroup";
import {StepProps} from "./Steps.types";


const meta: Meta<typeof Steps> =  {
    title: "AirWPSyncUI/Layout/Steps",
    component: Steps,
	args: {
		currentStepKey: 'step-1',
		steps: [
			{
				stepKey: 'step-1',
				children: <>
					<Heading level={2}>Step 1</Heading>
				</>
			},
			{
				stepKey: 'step-2',
				children: <>
					<Heading level={2}>Step 2</Heading>
				</>
			},
			{
				stepKey: 'step-3',
				children: <>
					<Heading level={2}>Step 3</Heading>
				</>
			}
		],
	}
};
export default meta;

export const StepsInteractive = () => {
	const [{ currentStepKey, steps }, updateArgs] = useArgs();
	const setCurrentStepKey = (currentStepKey:string) => updateArgs({ currentStepKey });
	const stepKeys = steps.map((step:StepProps) => step.stepKey);
	const nextKey = getNextKey(stepKeys, currentStepKey);
	const prevKey = getPrevKey(stepKeys, currentStepKey);

	return (
		<div>
			<ButtonGroup>
				<Button onClick={() => setCurrentStepKey(prevKey !== false ? prevKey : currentStepKey) }>Prev</Button>
				<Button onClick={() => setCurrentStepKey(nextKey !== false ? nextKey : currentStepKey) }>Next</Button>
			</ButtonGroup>

			<Steps
				currentStepKey={ currentStepKey }
				steps={steps}
			/>
		</div>
	);
};
