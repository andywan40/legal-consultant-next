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
  details: {
    padding: "1rem",
    paddingTop: 0,
    marginTop: 0,
  },
}));

export default function ItemAccordion({ title, content }) {
  const classes = useStyles();
  title = "竊盜犯贓物犯保安處分條例第3條";
  content =
    "十八歲以上之竊盜犯、贓物犯，有犯罪之習慣者，得於刑之執行前，令入勞動場所強制工作。刑法第八十四條第一項之期間，自前項強制工作執行完畢之日起算。但強制工作自應執行之日起經過三年未執行者，自該三年之期間屆滿之日起算。";
  return (
    <div className="border-b border-gray-400 accordion">
      <Accordion className={classes.background}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="accordion-title">{title}</h2>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className="border border-gray-300 p-3 bg-white">{content}</div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
