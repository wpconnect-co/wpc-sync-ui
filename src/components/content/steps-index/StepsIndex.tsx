import {StepsIndexProps} from "./StepsIndex.types";
import "./StepsIndex.css";
import classnames from "classnames";
import {StepChecked} from "../../graphics";

/**
 * StepsIndex. <br />
 * Display an index of steps.
 *
 * @param {StepIndex[]} steps Steps.
 * @param {string} currentStepKey Current step key.
 * @constructor
 */
const StepsIndex = ({ steps, currentStepKey, stepsDone = [], ...props }:StepsIndexProps) => {

	return <ol
		className="airwpsync-c-steps-index"
		{...props}
	>
		{ steps.map(({ stepKey, title }) => {
			const stepProps = {
				key: stepKey,
				className: classnames({
					'airwpsync-c-steps-index__step': true,
					'airwpsync-c-steps-index__step--current': currentStepKey === stepKey,
					'airwpsync-c-steps-index__step--done': stepsDone?.indexOf(stepKey) > -1
				})
			};
			if (currentStepKey === stepKey) {
				// @ts-ignore
				stepProps['aria-current'] = 'step';
			}
			return <li {...stepProps} >
				<StepChecked className="airwpsync-c-steps-index__step__icon" />
				<div className="airwpsync-c-steps-index__step__title">{ title }</div>
			</li>;
		}) }
	</ol>
};
export default StepsIndex;
