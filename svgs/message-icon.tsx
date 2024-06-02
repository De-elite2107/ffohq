// icon:messages | Tabler Icons https://tablericons.com/ | Csaba Kissi
import * as React from "react";

function IconMessages(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M21 14l-3-3h-7a1 1 0 01-1-1V4a1 1 0 011-1h9a1 1 0 011 1v10M14 15v2a1 1 0 01-1 1H6l-3 3V11a1 1 0 011-1h2" />
    </svg>
  );
}

export default IconMessages;
