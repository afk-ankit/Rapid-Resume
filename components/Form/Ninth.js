import { useSelector } from "react-redux";
import DesignOne from "../Templates/DesignOne";
import Container from "../utils/Container";
import StepCount from "../utils/StepCount";
import BtnGroup from "../utils/BtnGroup";
import DesignTwo from "../Templates/DesignTwo";
import { useState } from "react";
import styles from "@/styles/Ninth.module.scss";
import { useRouter } from "next/router";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import DesignThree from "../Templates/DesignThree.js";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import ReactToPrint from "react-to-print";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import useWindowWidth from "../utils/useWindow";

const Ninth = () => {
  const router = useRouter();
  const prevHandler = () => {
    router.push("/form/eighth");
  };
  const [template, setTemplate] = useState("0");
  const [color, setColor] = useState("0");
  const [componentRef, handleRef] = useState([null, null, null]);
  const templateHandler = (template) => {
    switch (template) {
      case "0":
        return (
          <div className={styles.display}>
            <DesignOne handleRef={handleRef} theme={color} />
          </div>
        );
      case "1":
        return (
          <div className={styles.display}>
            <DesignTwo handleRef={handleRef} theme={color} />
          </div>
        );
      case "2":
        return (
          <div className={styles.display}>
            <DesignThree handleRef={handleRef} theme={color} />
          </div>
        );
      default:
        return (
          <div className={styles.display}>
            <DesignOne handleRef={handleRef} theme={color} />
          </div>
        );
    }
  };
  const btnStyle = (isValid) => {
    if (!isValid) {
      return {
        background: "#808080",
        color: "white",
      };
    } else {
      return {
        background: "#FF9300",
        color: "white",
      };
    }
  };
  //logic for downloading pdf
  const downloadHandler = () => {
    // const options = {
    //   orientation: "p",
    //   unit: "px",
    //   format: [792, 1120],
    // };
    // const doc = new jsPDF(options);

    // console.log(componentRef[template].current);
    // doc.html(componentRef[template].current, {
    //   scale: 0.8, // set the scaling factor of the HTML content
    //   format: [200, 250], // set the page size of the PDF document
    //   unit: "mm", // set the unit of measurement for the page size
    //   autoPaging: "text",
    //   callback: function () {
    //     doc.save("download.pdf");
    //   },
    // });
    html2canvas(componentRef[template].current).then((canvas) => {
      const options = {
        orientation: "p",
        unit: "px",
        format: [canvas.width, canvas.height],
      };
      const doc = new jsPDF(options);
      const imageData = canvas.toDataURL("image/png", 1);
      doc.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);
      doc.save("download.pdf");
    });
  };

  const isMobile = useWindowWidth();
  console.log(isMobile);

  return (
    <Container>
      <StepCount count={8} />
      <div className={styles.theme}>
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Choose Template
            </FormLabel>
            <RadioGroup
              defaultValue="0"
              name="radio-buttons-group"
              onChange={(e) => setTemplate(e.target.value)}
            >
              <FormControlLabel value="0" control={<Radio />} label="Modern" />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Creative"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Advanced"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Choose Color
            </FormLabel>
            <RadioGroup
              defaultValue="0"
              name="radio-buttons-group"
              onChange={(e) => setColor(e.target.value)}
            >
              <FormControlLabel value="0" control={<Radio />} label="Default" />
              <FormControlLabel value="1" control={<Radio />} label="Pink" />
              <FormControlLabel value="2" control={<Radio />} label="Orange" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      {templateHandler(template)}
      <div className={styles.btnGroup}>
        <Button
          startIcon={<KeyboardArrowLeftIcon />}
          style={btnStyle(false)}
          onClick={prevHandler}
        >
          Previous
        </Button>

        <ReactToPrint
          trigger={() => (
            <div>
              <Button variant="contained" endIcon={<LocalPrintshopIcon />}>
                Print CV
              </Button>
            </div>
          )}
          content={() => componentRef[template].current}
        />
        {/* <Button onClick={downloadHandler} variant="contained">
          Download Cv
        </Button> */}
      </div>
    </Container>
  );
};

export default Ninth;
