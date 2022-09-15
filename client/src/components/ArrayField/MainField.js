
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useSelector} from "react-redux";


import React from 'react'

import FormField from './FormField'
const MainField = () => {
  

  const subTotal = useSelector((state) => state.reqData.subTotal);
  const initialReqItems = [
    {
      id: Math.floor(Math.random() * 1e7).toString(16),
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    //   link:"",
    //   comment:'',
    },
  ];
  const [reqItems, setReqItems] = useState(initialReqItems);
  console.log("main", reqItems);

  function addMoreItemHandler() {
    setReqItems((prevItems) => [
      ...prevItems,
      {
        id: Math.floor(Math.random() * 1e7).toString(16),
        name: "",
        quantity: 0,
        price: 0,
        total: 0,
        link:"",
      comment:'',
      },
    ]);
  }

  const handleRemove = (index) => {
    if (reqItems.length !== 1) {
      const values = [...reqItems];
      values.splice(index, 1);
      setReqItems(values);
    }
  };

  console.log("reqdata", reqItems);

 
  

  
  


  return (
    <>
      <Stack spacing={4} alignItems="center">
        {reqItems.map((item, _index) => (
          <FormField
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            total={item.total}
            index={_index}
            addMoreItemHandler={addMoreItemHandler}
            handleRemove={handleRemove}
          />
        ))}
        <div style={{display:'flex'}}>
          <h3 >Total:</h3>
          <h3 style={{color:"#00A300",marginLeft:"10px"}}>{` ${subTotal}  `}₹</h3>
        </div>
        
      </Stack>
      {/* <button onClick={()=>childsubmitProcrument.current.submitProcrument()} >submit</button> */}
      {/* <Button variant="contained" color="success" >Submit</Button> */}
      
    </>
  );
};
export default MainField;
