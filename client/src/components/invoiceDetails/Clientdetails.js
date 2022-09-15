
import React from 'react'

const Clientdetails = ({itemDetail}) => {
    const {clientname,
    clientaddress} = itemDetail
    const clientname2 = clientname.toUpperCase(clientname)
  return (
    <div className='clientdetails'>
    <h3>{clientname2}</h3>
    <p>{clientaddress}</p>

    </div>
    
  )
}

export default Clientdetails