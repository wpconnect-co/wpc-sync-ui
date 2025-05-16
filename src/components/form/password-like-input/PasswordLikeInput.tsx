import {PasswordLikeInputProps} from "./PasswordLikeInput.types";
import Input from "../input/Input";

/**
 * PasswordLikeInput. <br />
 *
 * @param {boolean} showPassword
 * @param {number} showXCharsOnLeft
 * @param {number} showXCharsOnRight
 * @param {string} value
 * @param {object} props Other props from Input.
 * @constructor
 */
const PasswordLikeInput = ({ showPassword, showXCharsOnLeft = 4, showXCharsOnRight = 4, value, ...props }:PasswordLikeInputProps) => {
	let inputValue = value ?? ''
	if (!showPassword && inputValue.length > 0) {
		// Code based on wpcf7_mask_password.
		const length = inputValue.length;

		let right = showXCharsOnLeft;
		let left = showXCharsOnRight;

		if ( length < right + left ) {
			right = left = 0;
		}

		let masked = '****';
		if ( length <= 48 ) {
			masked = '*'.repeat( length - ( right + left ) );
		} else if ( right + left < 48 ) {
			masked = '*'.repeat( 48 - ( right + left ) );
		}

		const left_unmasked = left ? inputValue.substring( 0, left ) : '';
		const right_unmasked = right ? inputValue.substring( length - right, length ) : '';

		inputValue = left_unmasked + masked + right_unmasked;
	}
    return <Input value={ inputValue } { ...props} />;
};
export default PasswordLikeInput;
