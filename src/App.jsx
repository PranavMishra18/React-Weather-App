import {useContext} from 'react'
import Form from './components/Form'
import Stats from './components/Stats'
import { WeatherContextProvider } from './context/WeatherContext'

function App() {

  return (
    <>
      <WeatherContextProvider>
        <div className="container mx-auto px-[200px] pb-[400px] w-[800px]">
          <Form/>
          <Stats/>
        </div>
      </WeatherContextProvider>
    
    </>
  )
}

export default App