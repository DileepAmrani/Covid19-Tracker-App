import React, {useContext}  from "react"
import "./Card.css"
import Paper from '@material-ui/core/Paper';
import CountUp from "react-countup"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {CovidContext} from "../Context/GlobalState"
const useStyles = makeStyles((theme) => ({
    
    paper: {
      width: 190,
      padding: theme.spacing(1),
      fontFamily: "Lato",
      height: 150,
      marginTop: 6
    },
    font:{
        fontFamily: "Lato"
    },
     
   
   
  }));

const Cards = ()=>{
    const covid = useContext(CovidContext)
    const {globalData} = covid
    let covidData = globalData.cases ? globalData : {cases:0,recovered:0,active:0,deaths:0}
      const classes = useStyles();
    return(
        <div className="card">
        <Grid container spacing={2} >
            <div className="card-style">
            <Grid item xs={12} sm={12} md = {6} lg = {6}  >
          <Paper className={classes.paper} >
              <Typography variant="h6" gutterBottom color="textSecondary" className ={classes.font} >
                  Infected 
            </Typography>
            <Typography variant="h4" gutterBottom  className ={classes.font}>
                 <CountUp start = {0} end= {covidData.cases} separator = "," duration ={2.5}/> 
            </Typography>
            <Typography color="textSecondary" className ={classes.font}>
             No of Infected cases in Covid-19   
            </Typography> 
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md = {6} lg = {6}>
          <Paper className={classes.paper} >
              <Typography variant="h6" gutterBottom color="textSecondary" className ={classes.font} >
              Active
            </Typography>
            <Typography variant="h4" gutterBottom  className ={classes.font}>
            <CountUp start = {0} end= {covidData.active} separator = "," duration ={2.5}/> 

            </Typography>
            <Typography color="textSecondary" className ={classes.font}>
             No of Active cases in Covid-19   
            </Typography> 
          </Paper>
        </Grid>
        </div>
        <div className="card-style">
         
        <Grid item xs={12} sm={12} md = {6} lg = {6}>
          <Paper className={classes.paper} >
              <Typography variant="h6" gutterBottom color="textSecondary" className ={classes.font} >
                  Recovered 
            </Typography>
            <Typography variant="h4" gutterBottom  className ={classes.font}>
            <CountUp start = {0} end= {covidData.recovered} separator = "," duration ={2.5}/> 

            </Typography>
            <Typography color="textSecondary" className ={classes.font}>
             No of Recovered cases in Covid-19   
            </Typography> 
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md = {6} lg = {6}>
          <Paper className={classes.paper} >
              <Typography variant="h6" gutterBottom color="textSecondary" className ={classes.font} >
                  Deaths 
            </Typography>
            <Typography variant="h4" gutterBottom  className ={classes.font}>
            <CountUp start = {0} end= {covidData.deaths} separator = "," duration ={2.5}/> 

            </Typography>
            <Typography color="textSecondary" className ={classes.font}>
             No of Death cases in Covid-19   
            </Typography> 
          </Paper>
        </Grid>
        
        </div>
        

      </Grid>
      
      
             
              

        </div>
    )
}
export default Cards