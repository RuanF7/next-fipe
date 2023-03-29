import Footer from "@/components/Footer";
import Form from "@/components/Form";
import { Typography } from "@mui/material";
import React from "react";

export default function HomeIndex() {
  return (
    <React.Fragment>      
      <Typography gutterBottom variant="h3" align="center">Fipe de Carros</Typography>
      <Form />
      <Footer />
    </React.Fragment>
  );
}
