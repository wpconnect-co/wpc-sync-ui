import {ParagraphProps} from "./Paragraph.types";
import "./Paragraph.css";

/**
 * Paragraph.
 * @param {('bold' | 'medium')} weight Strong weight.
 * @param {('xs' | 'sm' | 'base' | 'lg' | 'xl')} fontSize Font size.
 * @param string color A color from the theme (e.g "primary-50", "black")
 * @param {React.ReactNode} children Children
 * @constructor
 */
const Paragraph = ({ children, style, color = 'primary', weight = 'medium', fontSize = 'base' }:ParagraphProps) => {
    return (
        <p
			className={ `airwpsync-c-paragraph airwpsync-c-paragraph--weight-${weight} airwpsync-t-font-size--${fontSize}` }
			style={ { ...(style ?? {}), color: `var(--airwpsync--color--${color}` } }
		>{ children }</p>
    );
};
export default Paragraph;
