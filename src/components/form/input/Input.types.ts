import React from "react";

import {BaseInputProps} from "../../base/InputBase/InputBase.types";
import {InputType} from "./Input";

export interface InputProps extends  BaseInputProps, React.ComponentPropsWithoutRef<"input"> {
	id?: string;
	name?: string;
    type?: InputType;
	disabled?: boolean;
	value?: string;
	placeholder?: string;
	props?: object;
}
