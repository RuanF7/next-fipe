import {  Button, TextField, MenuItem, Card, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';

function Form() {
  const [marcas, setMarcas] = useState<string>("1");
  const [modelos, setModelos] = useState<string>("1");
  const [ano, setAno] = useState<string>("1");

  return (
    <Card>
      <CardContent>

        <Grid xs={12} item>
          
        </Grid>

        <Grid container spacing={4}>
          <Grid xs={12}  item>
            <TextField             
              label="Selecionar marca"
              select
              variant="outlined"
              value={marcas}
              sx={{width: {sm: 300}}}
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


          </Grid>

          <Grid xs={12} item>
            <TextField
              label="Selecionar modelo"
              select
              value={modelos}
              sx={{width: {sm: 300}}}
              onChange={(evento) => {
                setModelos(evento.target.value);
              }}
            >
              <MenuItem value="1" selected disabled>
                Modelo do Carro
              </MenuItem>
              <MenuItem value="celta">Celta</MenuItem>
              <MenuItem value="ranger">Ranger</MenuItem>
            </TextField>
          </Grid>
          <Grid xs={12} item>
            <TextField
              label="Selecionar ano"
              select
              value={ano}
              sx={{width: {sm: 300}}}
              onChange={(evento) => {
                setAno(evento.target.value);
              }}
            >
              <MenuItem value="1" selected disabled>
                Ano do Carro
              </MenuItem>
              <MenuItem value="1999">1999</MenuItem>
              <MenuItem value="2001">2001</MenuItem>
            </TextField>
          </Grid>

          <Grid xs={12} item>
            <Button variant="contained" endIcon={<SendIcon />}>Enviar</Button>
          </Grid>

        </Grid>

      </CardContent>

    </Card >
  );
}
export default Form;
