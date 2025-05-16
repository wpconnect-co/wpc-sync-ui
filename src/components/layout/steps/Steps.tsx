import { StepPropsInherited, StepsProps } from "./Steps.types";
import "./Steps.css";
import { CSSTransition } from 'react-transition-group';
import React, { useRef } from "react";
/**
 * @typedef {{ key: string, children: {React.ReactNode} }} StepProps
 */

/**
 * Steps.
 * Manage step transition.
 *
 * @param {string} currentStepKey Current step key.
 * @param {StepProps[]} steps Steps.
 *
 * @constructor
 */
const Steps = ({ currentStepKey, steps }:StepsProps) => {

    return (
        <div
			className={ `airwpsync-c-steps ` }
		>

				{steps.map((stepProps) => {
					return <Step { ...{...stepProps, currentStepKey, key: stepProps.stepKey } } />;
				})}


		</div>
	);
};

export function Step({ currentStepKey, stepKey, children }:StepPropsInherited) {
	const stepsRef= useRef(null);

	return <CSSTransition
		nodeRef={stepsRef}
		key={stepKey}
		timeout={300}
		classNames='item'
		in={ stepKey === currentStepKey }


		appear={true}

	>
		<div ref={stepsRef} className="airwpsync-c-steps__step">
			{children}
		</div>
	</CSSTransition>
}

export function getNextKey(stepKeys: string[], currentStepKey:string, loop:boolean = true):string|boolean {
	const currentIndex = stepKeys.indexOf(currentStepKey);
	let nextIndex:number|boolean = currentIndex >= stepKeys.length - 1 && loop ? 0 : currentIndex + 1;
	if (nextIndex > stepKeys.length - 1) {
		nextIndex = false;
	}
	return nextIndex !== false ? stepKeys[nextIndex] : false;
}

export function getPrevKey(stepKeys: string[], currentStepKey:string, loop:boolean = true):string|boolean {
	const currentIndex = stepKeys.indexOf(currentStepKey);
	let prevIndex:number|boolean = currentIndex === 0 && loop ? stepKeys.length - 1 : currentIndex - 1;
	if (prevIndex < 0) {
		prevIndex = false;
	}
	return prevIndex !== false ? stepKeys[prevIndex] : false;
}

export default Steps;
