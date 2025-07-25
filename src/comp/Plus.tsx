import * as React from "react";

// By: lucide
// See: https://v0.app/icon/lucide/plus
// Example: <IconLucidePlus width="24px" height="24px" style={{color: "#000000"}} />

export const Plus = ({
  height = "1em",
  strokeWidth = "2",
  fill = "none",
  focusable = "false",
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={height}
    focusable={focusable}
    {...props}
  >
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M5 12h14m-7-7v14"
    />
  </svg>
);
export default Plus