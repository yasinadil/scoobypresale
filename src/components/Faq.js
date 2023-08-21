import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../scss/faq.scss";
import { FAQ } from "../assests/data";
import FaqImg from "../assests/scoob/pngwing.com (12) (1).png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    wordBreak: "break-all",
  },
  paragraph: {
    width: "100%",
    wordBreak: "break-all",
  },
}));

const Faq = () => {
  const classes = useStyles();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <section id="faq" className="accordian">
        <div className="bac"></div>
        <div className="container">
          <div className="heading">
            <h1>FAQ</h1>
            <p data-aos="fade" className="aos-init aos-animate">
              Common answers to questions about Scooby Doo ($SCOOBY) can be
              found below.
            </p>
          </div>
          <div className="accordian__grid">
            <div className="start">
              <div className="img">
                <img src={FaqImg} width="100%" alt="" />
              </div>
            </div>
            <div className="end">
              <div style={{ width: "90%" }} className={classes.root}>
                {FAQ.map((item, i) => {
                  return (
                    <Accordion key={i}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {item.q}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography className={classes.paragraph}>
                          {item.ans}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
