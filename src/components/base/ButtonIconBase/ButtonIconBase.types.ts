import {ButtonBaseProps} from "../ButtonBase/ButtonBase.types";

export interface ButtonIconBaseProps extends ButtonBaseProps{
    icon: 'arrow-right' | 'arrow-left' | 'open-external' | 'new-connection' | 'verify' | 'circle-loading' | 'cross' | 'sync' | 'download';
	iconPos?: 'before' | 'after';
}
