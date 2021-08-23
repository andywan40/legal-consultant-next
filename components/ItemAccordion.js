import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { getRef } from "../helpers/getRef";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#e5e5e5",
    boxShadow: "none",
  },
  summary: {
    padding: 0,
  },
  details: {
    padding: "1rem",
    paddingTop: 0,
    marginTop: 0,
  },
}));

export default function ItemAccordion({ issueRef, content }) {
  const classes = useStyles();
  const type = "中華民國刑法";
  const [ref, setRef] = useState(() => getRef(issueRef));
  return (
    <div className="border-b border-gray-400 accordion">
      <Accordion className={classes.background}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="accordion-title">
            {type}
            {ref}
          </h2>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className="border border-gray-300 p-3 bg-white">{content}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
