import { useState,createContext, useReducer } from "react";
import { WeatherReducer } from "./WeatherReducer";


export const WeatherContext = createContext();

export const ACTIONS = {
  SET_LOADING : 'set-loading',
  GET_TEMPERATURE : 'get-temperature',
  CLEAR_RESULT : 'clear-result'
}

export function WeatherContextProvider({children}){

  const key = import.meta.env.VITE_WEATHER_API;
  const base_url = import.meta.env.VITE_WEATHER_URL;

  const [errorMsg,setErrorMsg] = useState('');

  const initialState = {
    result : {},
    loading : false
  }

  const[state,dispatch] = useReducer(WeatherReducer,initialState)

  async function getTemperature(value){

    setLoading();

    const params = new URLSearchParams({
      q : value,
    })

    const response = await fetch(`${base_url}/current.json?key=${key}&${params}`)

    if(response.status === 400){
      displayError();
    } else {
        const data = await response.json();
        dispatch({type : ACTIONS.GET_TEMPERATURE,payload : data})
    }    
    
  }

  function setLoading(){
    dispatch({type : ACTIONS.SET_LOADING});
  }

  function clearResult(){
    dispatch({type:ACTIONS.CLEAR_RESULT});
  }
  
  function displayError(){

    dispatch({type:ACTIONS.CLEAR_RESULT});
    setErrorMsg('Please enter a valid place.');
    setTimeout(() => {
      setErrorMsg('');
      return;
    },3000)
  }

  return(
    <WeatherContext.Provider value={{getTemperature,setLoading,clearResult,displayError,result:state.result,loading:state.loading,errorMsg}}>
      {children}
    </WeatherContext.Provider>
  )
  

}




export default WeatherContext;