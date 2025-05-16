import React from "react";
import {BaseInputProps} from "../../base/InputBase/InputBase.types";

export interface SelectLabelProps extends BaseInputProps {
}

export interface SelectOption {
	value: string,
	label: string,
	isDisabled?: boolean,
	description?: string
}

export interface GroupOption {
	label: string,
	options: SelectOption[]
}
