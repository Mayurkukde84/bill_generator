import React from "react";
import "./invoice.css";
const InvoiceNum = ({ itemDetail }) => {
  const { invoicenumber, invoicedate, invoiceduedate } = itemDetail;
  return (
    <div className="invoicenum">
      <p >Invoice no: {invoicenumber}</p>
      <p style={{position:'relative',bottom:"10px"}} >Invoice date:{invoicedate}</p>
      <p style={{position:'relative',bottom:"15px"}}>Due date:{invoiceduedate}</p>
    </div>
  );
};

export default InvoiceNum;
