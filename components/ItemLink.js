import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#e5e5e5",
    boxShadow: "none",
  },
  summary: {
    padding: 0,
  },
}));

export default function ItemLink({ title, content }) {
  const classes = useStyles();
  title = "竊盜犯贓物犯保安處分條例第3條";
  return (
    <div className="border-b border-gray-400 accordion">
      <div className="flex justify-between py-4 cursor-pointer">
        <div>
          <h2 className="accordion-title">{title}</h2>
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
