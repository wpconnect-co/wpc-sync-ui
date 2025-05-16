import SVGCircleLoading from "../icons/CircleLoading";
import "./CircleLoadingAnimation.css";
import {IconProps} from "../../../types/icon";

const CircleLoadingAnimation = (props:IconProps) => (
	<div className="airwpsync-c-circle-loading"><SVGCircleLoading {...props}/></div>
);
export default CircleLoadingAnimation;
