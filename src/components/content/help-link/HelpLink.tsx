import {HelpLinkProps} from "./HelpLink.types";
import React from "react";
import {CircleQuestion} from "../../graphics/icons";
import "./HelpLink.css";

/**
 * HelpLink. <br />
 * Display a link to an external help page with an optional preview.
 *
 * @param {string} text Link text
 * @param {string} href Link href
 * @param {{ src: string, alt?: string }} preview Preview config (img src and alt properties)
 * @param {('vertical' | 'horizontal')} direction Stack direction
 * @constructor
 */
const HelpLink = ({ text, href, preview, direction = 'horizontal' }:HelpLinkProps) => {

    return (
		<a className={ `airwpsync-c-help-link airwpsync-c-help-link--${direction}` } href={ href } target="_blank" rel="noreferrer">
			<span className={ `airwpsync-c-help-link__inner ` }>
				<span className="airwpsync-c-help-link__icon"><CircleQuestion /></span>
				<span className="airwpsync-c-help-link__text">{ text }</span>
			</span>
			{ preview ? <img className="airwpsync-c-help-link__preview" src={ preview.src } alt={ preview.alt ?? '' } /> : null }
		</a>
    );
};
export default HelpLink;
