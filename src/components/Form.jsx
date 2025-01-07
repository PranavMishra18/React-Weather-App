import React, { useContext, useState } from 'react'
import WeatherContext from '../context/WeatherContext';

function Form() {

  

  const {getTemperature,clearResult} = useContext(WeatherContext);
  const[value,setValue] = useState('');  
  


  function handleSubmit(e){
    e.preventDefault();
    
    getTemperature(value);    
    setValue('');
    
  } 

  function handleClear(){
    setValue('');
    clearResult();
  }

  return (
    <form onSubmit={handleSubmit}>
    <label className="form-control w-full max-w-xs mt-10">
        <div className="label">
            <span className="label-text">Enter a location</span>            
        </div>
        <input value={value} onChange={(e) => setValue(e.target.value)}  type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />    
    </label>
    <div className="btns mt-4 space-x-[180px]">
        <button type='submit' className="btn  btn-primary hover:text-white">Search</button>
        <button type='button' onClick={handleClear} className="btn btn-primary btn-outline">Clear</button>
    </div>

    </form>
  )
}

export default Form