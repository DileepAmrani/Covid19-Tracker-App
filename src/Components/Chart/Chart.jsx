import React, {useContext} from "react"
import "./chart.css"
import {Line} from "react-chartjs-2"
import {CovidContext} from "../Context/GlobalState"

const Chart = ()=>{
    const covid = useContext(CovidContext)
    const {historyData} = covid
    let allData = historyData.cases || historyData.country ? historyData : "Loading"
    let line;
    if(allData.country){
        const {timeline} = allData
        const {cases,deaths,recovered} = timeline
        const activeCases = []
        const deathCases = []
        const recoveredCases = []
        let dateData = []
        for(let _case in cases){
            let obj = {_case: cases[_case]}
            activeCases.push(obj)
        }
        for(let _death in deaths){
            let obj = {_death: deaths[_death]}
            deathCases.push(obj)
        }
        for(let _recover in recovered){
            let obj = {_recover: recovered[_recover]}
            recoveredCases.push(obj)
        }
        for(let _date in cases){
            let obj = {date: _date}
            dateData.push(obj)
        }
        
        line = (
            <Line
            data = {{
                labels : dateData.map(({date})=> date),
                datasets: [
                 {
                  data: activeCases.map(({_case})=>_case),
                  label: "Infected",
                  borderColor :"#3333ff",
                  fill: true   
                 },
                 {
                    data: deathCases.map(({_death})=>_death),
                    label: "Deaths",
                    borderColor :"red",
                    fill: true   
                   },
                   {
                    data: recoveredCases.map(({_recover})=>_recover),
                    label: "Recovered",
                    borderColor :"green",
                    fill: true   
                   },
                ]  
            }}
            
            />
        )
        
        
    }
    else{
        const {cases,deaths,recovered} = allData
        const activeCases = []
        const deathCases = []
        const recoveredCases = []
        let dateData = []
        for(let _case in cases){
            let obj = {_case: cases[_case]}
            activeCases.push(obj)
        }
        for(let _death in deaths){
            let obj = {_death: deaths[_death]}
            deathCases.push(obj)
        }
        for(let _recover in recovered){
            let obj = {_recover: recovered[_recover]}
            recoveredCases.push(obj)
        }
        for(let _date in cases){
            let obj = {date: _date}
            dateData.push(obj)
        }
        line = (
            <Line
            data = {{
                labels : dateData.map(({date})=> date),
                datasets: [
                 {
                  data: activeCases.map(({_case})=>_case),
                  label: "Infected",
                  borderColor :"#3333ff",
                  fill: true   
                 },
                 {
                    data: deathCases.map(({_death})=>_death),
                    label: "Deaths",
                    borderColor :"red",
                    fill: true   
                   },
                   {
                    data: recoveredCases.map(({_recover})=>_recover),
                    label: "Recovered",
                    borderColor :"green",
                    fill: true   
                   },
                ]  
            }}
            
            />
        ) 



    }
    
    
    
    return(
        <div className = "chart">
            {line}
             
              </div>
    )
}
export default Chart