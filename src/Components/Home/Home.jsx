import React from 'react';
import Grid from '@material-ui/core/Grid';
import Map from "../Map/Map"
import Cards from "../Cards/Cards"
import Chart from "../Chart/Chart"
import CountryPicker from "../CountryPicker/CountryPicker"


const Home = ()=>{
    return(
        <div>
            <CountryPicker/>
            <Grid container   alignItems = 'stretch' >
            <Grid item xs={12} sm={12} md = {8} lg = {8} >
            <Chart/>
            </Grid>

             <Grid item xs={12} sm={12} md = {4} lg = {4}>      
            <Cards/>
            </Grid>
            
            </Grid>
             <Grid>
                 <Grid item xs = {12} sm ={12} md = {12} lg ={12}> 
                    <h1 style = {{fontFamily:"Lato"}}>Covid Map</h1>
                   <div style = {{display: "block" ,margin: "0 auto", border: "1px solid gainsboro"}}>
                   <Map/>
                   </div>
                 </Grid>
             </Grid>
               
        </div>
    )
}
export default Home