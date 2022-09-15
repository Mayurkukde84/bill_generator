import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

import "./userform.css";
import ReactToPrint from "react-to-print";
import MainDetails from "../invoiceDetails/MainDetails";
import Clientdetails from "../invoiceDetails/Clientdetails";
import InvoiceNum from "../invoiceDetails/InvoiceNum";
import Notes from "../invoiceDetails/Notes";
import MainField from "../ArrayField/MainField";
import TableDetails from "../invoiceDetails/TableDetails";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
const UserForm = () => {
  const reqItemData = useSelector((state) => state.reqData.reqItem);
  console.log(reqItemData, "data");
  const [itemDetail, setItemDetails] = useState({
    id: Math.floor(Math.random() * 1e7).toString(16),
    fullname: "",
    address: "",
    email: "",
    website: "",
    phone: "",
    bankname: "",
    accountnumber: "",
    clientname: "",
    clientaddress: "",
    invoicenumber: "",
    invoicedate: "",
    invoiceduedate: "",
    textfield: "",
  });
  console.log(itemDetail);
  const itemHandlers = (e) => {
    setItemDetails((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const componentRef = useRef();

  return (
    <div className="row">
      <div className="column">
      <div className="border" >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 4, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="fullname"
              name="fullname"
              label="Full Name"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="address"
              name="address"
              label="Address"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="email"
              name="email"
              label="Enter your email"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="website"
              name="website"
              label="Enter your website"
              onChange={itemHandlers}
            />
            <TextField
              required
              name="phone"
              id="phone"
              label="Enter your phone"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="bankname"
              name="bankname"
              label="Enter your bank name"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="accountnumber"
              name="accountnumber"
              label="Enter your bank account number"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="clientname"
              name="clientname"
              label="Enter your client's name"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="clientaddress"
              name="clientaddress"
              label="Enter your client's address"
              onChange={itemHandlers}
            />
            <TextField
              required
              id="invoicenumber"
              name="invoicenumber"
              label="Invoice Number"
              onChange={itemHandlers}
            />
            <TextField
              required
              type="date"
              id="invoicedate"
              name="invoicedate"
              label="Invoice Date"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={itemHandlers}
            />
            <TextField
              required
              type="date"
              id="invoiceduedate"
              name="invoiceduedate"
              InputLabelProps={{
                shrink: true,
              }}
              label="Invoice due date"
              onChange={itemHandlers}
            />
          </div>
        </Box>
        <MainField />
        <h3>Additonals Notes</h3>
        <textarea style={{background:"rgb(238, 229, 212)"}} id="textfield" name="textfield" onChange={itemHandlers} />
        </div>
      </div>

      <div className="column">
        <div className="invoiceColor">
          <ReactToPrint
            trigger={() => (
              <Button
                variant="contained"
                className="bg-blue-500 ml-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
              >
                Print / Download
              </Button>
            )}
            content={() => componentRef.current}
          />

          <div ref={componentRef} className="p-1">
            <h2 style={{ textAlign: "center" }}>INVOICER</h2>
            <div className="maindetails2">
              <MainDetails itemDetail={itemDetail} />
            </div>
            <div className="clientdetails2">
              <Clientdetails itemDetail={itemDetail} />
            </div>

            <div className="invoicenum2">
              <InvoiceNum itemDetail={itemDetail} />
            </div>

            <div className="tabledetails2">
              <TableDetails itemDetail={itemDetail} />
            </div>

            <div className="notes2" >
            <Notes itemDetail={itemDetail} />

            </div>

            <div className="divider2" >
            <Divider />

            </div>
            

            <div className="bottomdetails">
              <h4>Your name:{itemDetail.fullname}</h4>
              <h4>Your email:{itemDetail.email}</h4>
              <h4>phone:{itemDetail.phone}</h4>
              <h4>website:{itemDetail.website}</h4>
            </div>

            <div className="bottomdetails2">
              <h4>Bank Name:{itemDetail.bankname}</h4>
              <h4>Account holder:{itemDetail.fullname}</h4>
              <h4>Account number:{itemDetail.accountnumber}</h4>
            </div>
            <p style={{textAlign:"center",position:"relative",bottom:"80px"}} >***this is demo file ***</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
