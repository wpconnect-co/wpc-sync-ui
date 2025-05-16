import {SpacerProps} from "./Spacer.types";
import "./Spacer.css";

/**
 * Spacer.
 *
 * @param {(10 | 16 | 24 | 32 | 64)} size Space size
 * @constructor
 */
export default function Spacer({ size }:SpacerProps) {
	return <div className={`airwpsync-c-spacer airwpsync-c-spacer--size-${size}`}></div>
}
