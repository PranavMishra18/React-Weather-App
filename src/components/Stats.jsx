import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext';
import Spinner from './Spinner';

function Stats() {

  const {result,loading} = useContext(WeatherContext);

  if(!result || !result.location){
    return (
      <></>
    )
  }

  const{current,location} = result;
  const{name} = location;

  
  if(loading){
    return (
      <Spinner/>
    )
  }
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

export default Stats