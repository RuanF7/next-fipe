import { Box, Button, TextField, MenuItem } from '@mui/material';
import React, { useState } from 'react';

export const Form = () => {

  const [marcas, setMarcas] = useState('')
    console.log('funcionando')
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setMarcas(event.target.value as string)
    }
  return (
    <Box component='span'>
      <TextField
      label='Selecionar marca'
      select
      value={marcas}
      onChange={handleChange}
      >
      <MenuItem value='GM'>Chevrolet</MenuItem>
      <MenuItem value='GM'>Chevrolet</MenuItem>
      <MenuItem value='GM'>Chevrolet</MenuItem>
      </TextField>
      <Button>Enviar</Button>
    </Box>
  )
}
