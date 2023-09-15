import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import "jspdf-autotable";

function ComponentToPrint() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>This is some text that will be included in the PDF.</p>
    </div>
  );
}

function MyPrintComponent() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#my-table" });
    doc.save("my-pdf.pdf");
  };

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button onClick={handlePrint}>Print</button>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
}

export default MyPrintComponent;
