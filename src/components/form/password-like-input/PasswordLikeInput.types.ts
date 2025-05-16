import {InputProps} from "../input/Input.types";
export interface PasswordLikeInputProps extends InputProps {
	showPassword: boolean;
	showXCharsOnLeft: number;
	showXCharsOnRight: number;
}
