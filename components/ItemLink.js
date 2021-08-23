import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getRef } from "../helpers/getRef";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#e5e5e5",
    boxShadow: "none",
  },
  summary: {
    padding: 0,
  },
}));

export default function ItemLink({ lawName, issueRef }) {
  const [ref, setRef] = useState(() => getRef(issueRef));
  const handleLawSearch = e => {
    //google
    window.open(`https://www.google.com/search?q=${lawName}${ref}`);
  };

  return (
    <div className="border-b border-gray-400 accordion">
      <div className="flex justify-between py-4 cursor-pointer">
        <div onClick={handleLawSearch}>
          <h2 className="accordion-title">
            {lawName}
            {ref}
          </h2>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="rgba(0, 0, 0, 0.54)"
            viewBox="0 0 24 24"
            stroke="rgba(0, 0, 0, 0.54)"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
