import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

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
  const getRef = issueref => {
    const parts = issueref.split(" ");
    const first =
      parts[0].split("-").length === 2
        ? `${parts[0].split("-")[0]}之${parts[0].split("-")[1]}`
        : parts[0];
    if (parts.length === 1) {
      return `第${first}條`;
    } else if (parts.length === 2) {
      if (parts[0].indexOf("-") === -1) {
        //第幾條第幾項
        return `第${first}條第${parts[1]}項`;
      } else {
        //第幾之幾條;
        return `第${first}條第${parts[1]}項`;
      }
    } else if (parts.length === 3) {
      //第幾條第幾項第幾款
      return `第${first}條第${parts[1]}項第${parts[2]}款`;
    }
  };
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
