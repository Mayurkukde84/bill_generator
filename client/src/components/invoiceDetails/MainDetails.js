import React from 'react'
import './invoice.css'
const MainDetails = ({itemDetail}) => {
    const {address,fullname} = itemDetail
    
    const fullname2 = fullname.toUpperCase(fullname)
  return (
    <div className='maindetails'>
       <h3>{fullname2}</h3>
       <p>{address}</p> 
    </div>
  )
}

export default MainDetails