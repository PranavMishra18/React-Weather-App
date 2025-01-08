import React, { useContext, useState } from 'react';
import WeatherContext from '../context/WeatherContext';

function Form() {
  const { getTemperature, clearResult,displayError,errorMsg} = useContext(WeatherContext);
  const [value, setValue] = useState('');
  

  function handleSubmit(e) {
    e.preventDefault();

    if(value === ''){
      displayError();  
    } else {

      getTemperature(value);

    }

    setValue('');
  }

  function handleClear() {
    setValue('');
    clearResult();
  }

  return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center mt-10 space-y-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-lg"
      >
        <label className="form-control w-full max-w-sm">
          <div className="label">
            <span className="label-text text-gray-300 text-lg font-semibold">Enter a location</span>
          </div>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="e.g., New York"
            className="input input-bordered input-primary w-full max-w-sm focus:ring-2 focus:ring-gray-500 transition-all duration-300"
          />
          <div className="label">
          {errorMsg && (
            <span className="label-text-alt text-red-600 text-base">{errorMsg}</span>
          )} 
          </div>
        </label>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="btn bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300"
            disabled = {value.length > 1 ? false : true}
          >
            Search
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="btn btn-outline text-gray-300 border-gray-500 hover:bg-gray-700 hover:text-white hover:border-gray-600 transition-all duration-300"
          >
            Clear
          </button>
        </div>
      </form>

  );
}

export default Form;
