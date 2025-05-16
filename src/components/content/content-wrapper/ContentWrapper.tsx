import React from "react";
import './ContentWrapper.css';
import {ContentWrapperProps} from "./ContentWrapper.types";
/**
 * ContentWrapper.
 *
 * Wrapper for content base components. Limit the width.
 *
 * @param {React.ReactNode} children Children
 * @return {Element}
 */
const ContentWrapper = ({ children }:ContentWrapperProps) => {
    return (
        <div
			className={ `airwpsync-c-content-wrapper ` }
		>{ children }</div>
    );
};

export default ContentWrapper;
