import React from 'react'
import { Paper, Typography } from "@mui/material";


function Header() {


  return (
    <React.Fragment>
      <Paper elevation={12} sx={{ width: '600px', margin: '0 0 0 400px' }}>
        <Typography gutterBottom variant="h3" align="center"  sx={{color: '#FFF8DC', backgroundColor: 'text.primary'}}>Fipe de Carros</Typography>

      </Paper>
    </React.Fragment>
  );

}

export default Header;

