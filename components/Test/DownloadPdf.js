import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Table from "./Table";
import html2canvas from "html2canvas";

const DownloadPdf = () => {
  const componentRef = useRef();
  const generatePDF = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const doc = new jsPDF();
      const imageData = canvas.toDataURL("image/png");
      const options = {
        orientation: "p",
        unit: "px",
        format: [canvas.width, canvas.height],
      };
      doc.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);
      doc.save("download.pdf");
    });
  };

  console.log(componentRef.current);
  return (
    <div>
      {/* <Table /> */}
      <h1 ref={componentRef} style={{ color: "red" }}>
        Hello World
      </h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default DownloadPdf;
