import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Customlink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className="px-5 font-bold"
        style={{
          color: match ? "coral" : "black",
          textDecoration: match ? "underline" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default Customlink;
