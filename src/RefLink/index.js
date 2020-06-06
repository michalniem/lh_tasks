import React from "react";
import { Link } from "react-router-dom";

import { useRefLink } from "./RefLinkProvider";

export default function Index() {
  const refLink = useRefLink();
  return (
    <div>
      Current refLink: {refLink}
      <ul>
        <li>
          <Link to="/*?ref=ABCD44E">refLink: ABCD44E</Link>
        </li>
        <li>
          <Link to="/*?ref=FGHIJ123">refLink: FGHIJ123</Link>
        </li>
        <li>
          <Link to="/*?ref=KLMN88">refLink: KLMN88</Link>
        </li>
      </ul>
    </div>
  );
}
