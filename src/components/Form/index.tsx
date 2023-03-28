import { Box, Button, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [marcas, setMarcas] = useState<string>("1");

  return (
    <Box component="span">
      <TextField
        label="Selecionar marca"
        select
        value={marcas}
        onChange={(evento) => {
          setMarcas(evento.target.value);
        }}
      >
        <MenuItem value="1" selected disabled>
          Marca do Carro
        </MenuItem>
        <MenuItem value="fiat">Fiat</MenuItem>
        <MenuItem value="ford">Ford</MenuItem>
      </TextField>
      <Button>Enviar</Button>
    </Box>
  );
}
export default Form;
