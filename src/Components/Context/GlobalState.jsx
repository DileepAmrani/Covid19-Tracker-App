import React , { createContext} from "react"
import {FetchAPI} from "../FetchHook/fetchhook"
export const CovidContext = createContext()
export const CovidProvider = ({children})=>{
  const {setUrl,globalData,historyData,countryData,mapData} = FetchAPI()


return(
    <CovidContext.Provider value = {{setUrl,globalData,historyData,countryData,mapData}}>
      {children}
    </CovidContext.Provider>
)

}