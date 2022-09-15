import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reqDataActions } from "../../app/reqDataSlice";
import InputAdornment from "@mui/material/InputAdornment";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
const FormField = (props) => {
  const subTotal = useSelector((state) => state.reqData.subTotal);
  const items = useSelector((state) => state.reqData.reqItems);

  const alltabsdata = useSelector((state) => state.reqData.alltabsdata);

  const dispatch = useDispatch();
  console.log("ProcurementForm ran");
  const [itemDetail, setItemDetail] = useState({
    id: props.id,
     name: "",
    quantity: 0,
    price: 0,
    total: 0,
    link:"",
    comment:'',
  });

  console.log("itemDetail", itemDetail);

  function itemUpdateHandler(e) {
    console.log("itemUpdateHandler ran");

    setItemDetail((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  useEffect(() => {
    setItemDetail((prevState) => ({
      ...prevState,
      total: itemDetail.quantity * itemDetail.price,
    }));
  }, [itemDetail.quantity, itemDetail.price]);

  useEffect(() => {
    dispatch(reqDataActions.addItem(itemDetail));
  }, [dispatch, itemDetail]);

  useEffect(() => {
    dispatch(reqDataActions.subTotal(itemDetail.total));
  }, [dispatch, itemDetail.total]);

  console.log("Subtotal for the entire procurement is");
  console.log(subTotal);
  console.log("items", items);
  console.log("reqData", alltabsdata);


  return (
    <Box component="form"
    sx={{
      '& .MuiTextField-root': { m: 1 },
    }}>
      <div style={{justifyContent:"space-between"}}>
        <TextField sx={{ width: "6ch" }} value={props.index + 1} />
        <TextField
          sx={{ width: "20ch" }}
          onChange={itemUpdateHandler}
          type="text"
          id="name"
          name="name"
          label="Item Name"
          variant="outlined"
        />
        <TextField
          sx={{ width: "15ch" }}
          onChange={itemUpdateHandler}
          type="number"
          id="quantity"
          name="quantity"
          label="Item Quantity"
          variant="outlined"
        />
        <TextField
          sx={{ width: "15ch" }}
          onChange={itemUpdateHandler}
          type="number"
          id="price"
          name="price"
          label="Price ₹"
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
        <TextField
          disabled={true}
          type="number"
          id="total"
          // label={`₹${itemDetail.total}`}
          label="Price Total ₹"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">{`₹${itemDetail.total}`}</InputAdornment>
            ),
          }}
          variant="outlined"
          sx={{ width: "15ch" }}
        />
        
        <Button
          type="button"
          style={{ margin: "20px" }}
          onClick={props.addMoreItemHandler}
          variant= 'contained'
          size='small'
        >
          +
        </Button>
        <Button type="button" onClick={props.handleRemove} size='small'    variant= 'contained' color="error" >
          -
        </Button>
      </div>
    </Box>
  );
};

export default FormField;
