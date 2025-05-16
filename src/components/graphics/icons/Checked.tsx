import * as React from "react";
import {IconProps} from "../../../types/icon";
const SvgChecked = ({
  title,
  titleId,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 9.68 7.18"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M9.37.32c.43.43.43 1.12 0 1.55l-5 5c-.43.43-1.12.43-1.55 0l-2.5-2.5c-.43-.43-.43-1.12 0-1.55s1.12-.43 1.55 0L3.6 4.55 7.82.32c.43-.43 1.12-.43 1.55 0"
    />
  </svg>
);
export default SvgChecked;
