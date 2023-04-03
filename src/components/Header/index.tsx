import React from 'react'
import {  Paper, Typography } from "@mui/material";
import { Container } from '@mui/system';


function Header() {


  return (
    <React.Fragment>
      <Container fixed>
        <Paper elevation={12} sx={{ width: '600px', margin: 'auto' }}>
          <Typography gutterBottom variant="h3" align="center" sx={{ color: '#FFF8DC', backgroundColor: 'text.primary' }}>Fipe de Carros</Typography>

        </Paper>
      </Container>

    </React.Fragment>
  );

}

export default Header;

