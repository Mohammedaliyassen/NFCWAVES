import * as React from "react";

// By: ion
// See: https://v0.app/icon/ion/camera-reverse-outline
// Example: <IconIonCameraReverseOutline width="24px" height="24px" style={{color: "#000000"}} />

export const Camera = ({
  height = "1em",
  strokeWidth = "32",
  fill = "none",
  focusable = "false",
  ...props
}: 
Omit<React.SVGProps<SVGSVGElement>, "children">) => (
  <svg
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
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
      d="m350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32"
    />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M124 158v-22h-24v22m235.76 127.22v-13.31a80 80 0 0 0-131-61.6M176 258.78v13.31a80 80 0 0 0 130.73 61.8"
    />
    <path
      fill={fill}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="m196 272l-20-20l-20 20m200 0l-20 20l-20-20"
    />
  </svg>
);

export  default Camera