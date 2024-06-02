// icon:bx-down-arrow-circle | Boxicons https://boxicons.com/ | Atisa
import * as React from "react";

function DownArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 1.993C6.486 1.994 2 6.48 2 11.994c0 5.513 4.486 9.999 10 10 5.514 0 10-4.486 10-10s-4.485-10-10-10.001zm0 18.001c-4.411-.001-8-3.59-8-8 0-4.411 3.589-8 8-8.001 4.411.001 8 3.59 8 8.001s-3.589 8-8 8z" />
      <path d="M13 8h-2v4H7.991l4.005 4.005L16 12h-3z" />
    </svg>
  );
}

export default DownArrow;