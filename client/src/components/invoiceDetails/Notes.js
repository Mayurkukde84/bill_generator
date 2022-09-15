import React from 'react'

const Notes = ({itemDetail}) => {
  return (
    <>
    <p>Additional notes</p>
      <pre>{itemDetail.textfield}</pre>
    </>
    
  )
}

export default Notes