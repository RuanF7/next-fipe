import {
  Button,
  TextField,
  MenuItem,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

import React, { useState, useLayoutEffect } from "react";
import SendIcon from "@mui/icons-material/Send";
import Image from "next/image";

import { getMarcas } from "@/core/api";
import { Marca_API } from "@/models/ApiModels";

function Form() {
  /* Inicio: Estados das marcas dos carros */
  const [marcas, setMarcas] = useState<[Marca_API]>([{ codigo: "", nome: "" }]);
  const [marcaID, setMarcaID] = useState<string>("");
  /* Fim: Estados das marcas dos carros */

  const [modelos, setModelos] = useState<string>("1");
  const [ano, setAno] = useState<string>("1");

  useLayoutEffect(() => {
    const dados = async () => {
      const listaMarcas = await getMarcas();
      setMarcas(listaMarcas.marcas);
    };

    dados();
  }, []);

  return (
    <Card style={{ margin: "200px" }}>
      <CardContent>
        <Grid
          container
          direction="row"
          spacing={4}
          sx={{ bgcolor: "#FFF8DC", color: "text.primary" }}
        >
          <Grid lg={4} md={12} sm={4} item sx={{ width: { sm: 300 } }}>
            <Image
              src="/Images/ford.png"
              alt="Picture of ford logo"
              width={120}
              height={80}
              style={{
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                margin: "0px 0px 0px 90px",
              }}
            ></Image>
            <Grid
              lg={12}
              md={12}
              sm={3}
              style={{
                display: "flex",
                alignItems: "flex-start",
                margin: "40px 40px 40px 60px",
              }}
            >
              <TextField
                label="Ford Ranger 1994"
                multiline
                rows={7}
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid>
            <Grid
              lg={12}
              md={12}
              sm={3}
              item
              style={{
                display: "flex",
                alignItems: "flex-start",
                margin: "40px 0px 0px 200px",
              }}
            >
              <TextField
                label="Selecionar marca"
                select
                variant="outlined"
                value={marcaID}
                sx={{ width: { sm: 300 } }}
                onChange={(event) => {
                  setMarcaID(event.target.value);
                }}
              >
                {marcas.map((valor) => (
                  <MenuItem key={valor.codigo} value={valor.codigo}>
                    {valor.nome}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid
              lg={12}
              md={12}
              sm={3}
              item
              style={{
                display: "flex",
                alignItems: "flex-start",
                margin: "40px 0px 0px 200px",
              }}
            >
              <TextField
                label="Selecionar modelo"
                select
                value={modelos}
                sx={{ width: { sm: 300 } }}
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
            <Grid
              lg={12}
              md={12}
              sm={3}
              item
              style={{
                display: "flex",
                alignItems: "flex-start",
                margin: "40px 0px 0px 200px",
              }}
            >
              <TextField
                label="Selecionar ano"
                select
                value={ano}
                sx={{ width: { sm: 300 } }}
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

            <Grid
              lg={12}
              md={12}
              sm={3}
              item
              style={{ margin: "40px 0px 0px 200px" }}
            >
              <Button
                variant="contained"
                sx={{ color: "#FFF8DC", bgcolor: "text.primary" }}
                endIcon={<SendIcon />}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
export default Form;
