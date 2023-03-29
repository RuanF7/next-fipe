import { Box, Button, TextField, MenuItem, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [marcas, setMarcas] = useState<string>("1");

  return (
    <Card>
      <CardContent>
        <Grid container spacing={1}>
          <Grid xs={12} item>
            <TextField
              label="Selecionar marca"
              select
              value={marcas}
              onChange={(evento) => {
                setMarcas(evento.target.value);
              }}
            />
            <MenuItem value="1" selected disabled>
            Marca do Carro
            </MenuItem>
            <MenuItem value="fiat">Fiat</MenuItem>
            <MenuItem value="ford">Ford</MenuItem>
          </Grid>
          

          
          <Grid xs={12} item>
            <Button>Enviar</Button>
          </Grid>
        
      </Grid>

    </CardContent>

    </Card >
  );
}
export default Form;
