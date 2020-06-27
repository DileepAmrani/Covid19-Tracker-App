import React from 'react'
import { useState, useContext } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import {CovidContext} from "../Context/GlobalState"
import Grid from '@material-ui/core/Grid';

export default function Map() {

    const covid = useContext(CovidContext)
    const {mapData} = covid
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "90vh",
        latitude: 30,
        longitude: 70,
        zoom: 3,
      });
    return (
       <Grid> 
        <div>
            <ReactMapGL 
        mapStyle="mapbox://styles/mapbox/dark-v9"
        {...viewport} 
      mapboxApiAccessToken = {"pk.eyJ1IjoiaGFtemEtYWx2aSIsImEiOiJja2J4b3YwZmcwODgyMnpxbjNqajRwMWF5In0.eNG2Xp-V76yb_jHt62l2PA"}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
        {mapData.map((country)=>{
            return <Marker key= {country.country} latitude={country.countryInfo.lat}    
            longitude={country.countryInfo.long}>
            <div>    
            <img src = {country.countryInfo.flag} alt="countries" width = "25px"/>
            <abbr 
            style={{backgroundColor: "red", borderRadius: 20, color: "white" , fontSize: "12px",textDecoration: "none", fontFamily: "Lato",cursor: "Pointer"}}
             title = {`Recovered: ${country.recovered}
Active: ${country.active}
Deaths: ${country.deaths}`}>{country.cases}</abbr>
            </div>
            </Marker>
        }
            
        )}
    </ReactMapGL>
        </div>
        </Grid>
    )
}
