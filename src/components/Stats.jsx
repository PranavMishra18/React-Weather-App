import React, { useContext, useState, useEffect } from 'react';
import WeatherContext from '../context/WeatherContext';
import Spinner from './Spinner';

function Stats() {
  const { result, loading } = useContext(WeatherContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (result && result.location) {
      setIsVisible(true); // Show the component when result is available
    } else {
      setIsVisible(false); // Hide the component when result is cleared
    }
  }, [result]);

  if (loading) {
    return <Spinner />;
  }

  if (!result || !result.location) {
    return null;
  }

  const { current, location } = result;
  const { temp_c, temp_f, condition, humidity, wind_kph, wind_mph } = current;
  const { country, name } = location;
  const { text, icon } = condition;

  return (
    <div
      className={`mt-10 flex justify-center items-center transition-transform duration-600 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-gray-300 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">
          Weather in {name}, {country}
        </h2>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={icon}
              alt={text}
              className="w-16 h-16 animate-bounce"
            />
            <p className="text-lg font-medium">{text}</p>
          </div>
          <p className="text-4xl font-extrabold">{temp_c}°C</p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center">
            <p>Humidity</p>
            <p className="font-bold">{humidity}%</p>
          </div>
          <div className="text-center">
            <p>Wind Speed</p>
            <p className="font-bold">{wind_kph} kph / {wind_mph} mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
