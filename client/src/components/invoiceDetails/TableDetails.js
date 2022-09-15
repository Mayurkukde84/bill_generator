import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import './invoice.css'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const TableDetails = () => {
  const subTotal = useSelector((state) => state.reqData.subTotal);
  const reqCalc = useSelector((state)=>state.reqData.alltabsdata.reqItems)

  return (
   <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Sr.No.</StyledTableCell>
            <StyledTableCell align="center">ItemName</StyledTableCell>
            <StyledTableCell align="center">ItemQuantity</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">PriceTotal</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {reqCalc.map((row,index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.quantity}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center">{row.total}</StyledTableCell>
            </StyledTableRow>
          ))}
          
        </TableBody>
       
      </Table>
  
    </TableContainer>
    <div className='subtotal' >
    
          <h3 >Total:</h3>
          <h3 style={{color:"#00A300",marginLeft:"10px"}}>{` ${subTotal}  `}₹</h3>
        </div>
        

   </>
  )
}

export default TableDetails