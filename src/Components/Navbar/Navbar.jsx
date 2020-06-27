import React from 'react'
import "./Navbar.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

 function Navbar() {
    return (
        
    <div className = "navbar">
     <AppBar position="static" style= {{backgroundColor: "#212121"}}>
     <Toolbar>
     <Grid
      justify="center" 
      container 
    >
      <Grid item>
        <Typography type="title" color="inherit" variant = "h5" style= {{fontFamily : "Lato",fontWeight:500}}>
          Covid Tracker
        </Typography>
      </Grid>
    </Grid>
    </Toolbar>
    </AppBar>

        </div>
    )
}

export default Navbar