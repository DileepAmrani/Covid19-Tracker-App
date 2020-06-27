import React , {useContext}from "react"
import "./countrypicker.css"
import {CovidContext} from "../Context/GlobalState"
import NativeSelect from '@material-ui/core/NativeSelect';

const CountryPicker = ()=>{
    const covid = useContext(CovidContext)
    const {setUrl,countryData,globalData} = covid
     const allCountries = countryData.countries ? countryData.countries : []
    return(
        <div className = "countryPicker">
            <NativeSelect onChange = {(e)=> setUrl(e.target.value)} className = "nativeSelect">
              <option value="">Select Country</option>
              {allCountries.map((country)=> <option key={country.name} value={country.name}>{country.name}</option>)}

          </NativeSelect>
        </div>
    )
}
export default CountryPicker