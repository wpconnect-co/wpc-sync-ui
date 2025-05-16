import React from "react";
import {BaseInputProps} from "../../base/InputBase/InputBase.types";

export interface ToggleButtonProps extends BaseInputProps, React.ComponentPropsWithoutRef<"input"> {
	checked: boolean,
}
