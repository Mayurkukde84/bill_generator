import React from 'react'
import { TextField } from '@mui/material'
import Box from '@mui/material/Box';
const TextArea = () => {
  return (
    <>
         <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 2, width: 300 },
          }}
          noValidate
          autoComplete="off"
        >
                <TextField placeholder='add' id="standard-basic" label="Standard" variant="standard" />

        </Box>
    </>

  )
}

export default TextArea