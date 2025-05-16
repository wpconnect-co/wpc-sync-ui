import {default as ReactSelect, Props, GroupBase, DropdownIndicatorProps, components, OptionProps} from "react-select";
import AsyncSelect, { AsyncProps } from "react-select/async";
import SvgDropdownIndicator from "../../graphics/icons/DropdownIndicator";
import {useId} from "react";
import { SelectLabelProps } from "./Select.types";
import "../input/Input.css";
import classnames from "classnames";
import "./Select.css";

/**
 * Select. <br />
 * Display a dropdown list. Accepts other props from <a href="https://react-select.com/props#statemanager-props" target="_blank">React Select</a> component appart from components, styles and theme.
 *
 * @param {React.ReactNode} label
 * @param {React.ReactNode} instructions
 * @param {('idle' | 'valid' | 'invalid')} status
 * @param {object} ...reactSelectProps Other props from React Select component.
 *
 * @constructor
 */
export default function Select<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>
>({ label, labelHidden, instructions, status, ...reactSelectProps }: Props<Option, IsMulti, Group> & SelectLabelProps) {
	const inputId = useId();
	if ('undefined' === typeof reactSelectProps.isSearchable) {
		reactSelectProps.isSearchable = false;
	}

    return <>
		<label
			className={classnames({
				'airwpsync-c-input__label': true,
				'screen-reader-text': labelHidden,
			})}
			htmlFor={ inputId }
		>{ label }</label>
		<div className={ `airwpsync-c-select__select-wrapper` }>
			<ReactSelect
				{ ...reactSelectProps as Omit<Props, "classNamePrefix" | "components" | "styles" | "theme"> }
				{ ...selectPropsModifier({ status }) }
			/>
			{ instructions ? <p className={ `airwpsync-c-input__instructions` }>{ instructions }</p> : null }
		</div>
	</>;
};

export function SelectAsync<
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>
>({ label, instructions, status, ...reactSelectProps }: AsyncProps<Option, IsMulti, Group> & SelectLabelProps) {
	const inputId = useId();
	if ('undefined' === typeof reactSelectProps.isSearchable) {
		reactSelectProps.isSearchable = false;
	}


	return <>
		<label className="airwpsync-c-input__label" htmlFor={ inputId }>{ label }</label>
		<div className={ `airwpsync-c-select__select-wrapper` }>
			{ /* @ts-ignore */ }
			<AsyncSelect
				{ ...reactSelectProps as Omit<AsyncProps<Option, IsMulti, Group>, "classNamePrefix" | "components" | "styles" | "theme"> }
				{ ...selectAsyncPropsModifier({ status }) }
			/>
			{ instructions ? <p className={ `airwpsync-c-input__instructions` }>{ instructions }</p> : null }
		</div>
	</>;
}


const DropdownIndicator = (props: DropdownIndicatorProps<any>) => {
	return (
		<components.DropdownIndicator {...props}>
			<SvgDropdownIndicator />
		</components.DropdownIndicator>
	);
}

const Option = (props:OptionProps) => {


	return (
		<components.Option {...props}>
			{ props.children }
			{
				// @ts-ignore `description` is not part of the default option typescript definition
				props.data?.description ? <div className="airwpsync-c-select__option-description">{ props.data.description }</div> : null
			}
		</components.Option>
	);
}

const selectPropsModifier = ({ status }:Pick<SelectLabelProps, "status">):Pick<Props, "classNamePrefix" | "components" | "styles" | "theme"> => {
	return {
		classNamePrefix: "airwpsync-c-select",
		components: {
			DropdownIndicator,
			Option
		},
		// menuIsOpen: true, // useful for debug
		styles: {
			container: (baseStyles, state) => {
				return {
					...baseStyles,
					maxWidth: '768px',
					fontSize: '1rem',
				}
			},
				control: (baseStyles, state) => {
				let borderColor = 'var(--airwpsync--color--primary-100)';
				if (state.isFocused) {
					borderColor = 'var(--airwpsync--color--primary-400)';
				} else if ('invalid' === status) {
					borderColor = 'var(--airwpsync--color--error)';
				}
				return {
					...baseStyles,
					borderColor,
					borderBottomLeftRadius: state.menuIsOpen ? 0 : '',
					borderBottomRightRadius: state.menuIsOpen ? 0 : '',
					boxShadow: 'none',

				}
			},
				placeholder: (baseStyles) =>({
				...baseStyles,
				color: 'var(--airwpsync--color--primary-200)'
			}),
				indicatorSeparator: (baseStyles, state) => {
				return {
					...baseStyles,
					width: 0
				}
			},
				dropdownIndicator: (baseStyles, state) => {
				return {
					...baseStyles,
					color: 'var(--airwpsync--color--primary)',
					transform: state.selectProps.menuIsOpen ? 'scaleY(-1)' : '',
					':hover': {
						color: 'var(--airwpsync--color--primary-900)',
					}
				}
			},
				clearIndicator: (baseStyles, state) => {
				return {
					...baseStyles,
					color: 'var(--airwpsync--color--primary)',
					':hover': {
						color: 'var(--airwpsync--color--primary-900)',
					}
				}
			},
				menuList: (baseStyles, state) => {
				return {
					...baseStyles,
					paddingTop: '12px',
					paddingBottom: '12px'
				}
			},
				menu: (baseStyles, state) => {
				return {
					...baseStyles,
					marginTop: '-1px',
					borderTopLeftRadius: 0,
					borderTopRightRadius: 0
				}
			},
				option: (baseStyles, state) => {

				return {
					...baseStyles,
					color: state.isSelected ?
						'#FFF'
						: (state.isDisabled ?
							'var(--airwpsync--color--primary-200)'
							: 'var(--airwpsync--color--primary-400)'),

				}
			}
		},
		theme: (theme) => ({
			...theme,
			borderRadius: 4,
			colors: {
				...theme.colors,
				primary25: 'var(--airwpsync--color--primary-50)',
				primary50: 'var(--airwpsync--color--primary-200)',
				primary75: 'var(--airwpsync--color--primary-300)',
				primary: 'var(--airwpsync--color--primary)',
			},
		})
	};
}

const selectAsyncPropsModifier = <
	Option,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>
>(props:Pick<SelectLabelProps, "status">):Pick<AsyncProps<Option, IsMulti, Group>, "classNamePrefix" | "components" | "styles" | "theme"> => {
	return selectPropsModifier(props) as Pick<AsyncProps<Option, IsMulti, Group>, "classNamePrefix" | "components" | "styles" | "theme">;
};
