import React, { useState } from 'react'

export const Kelvin = ({value}) => {
    return (
      <div className="temp-card">
    The temperature in Kelvin is: <span className="temp">{value}K</span>
  </div>   
    )
   
}

export const Fahrenheit =({ value }) =>{
    return (
      <div className="temp-card">
        The temperature in Fahrenheit is:
        <span className="temp">{value}°F</span>
      </div>
    );
  }


export const TemperatureConverter = ({renderKelvin, renderFahrenheit}) => {
    const [value, setValue] = useState(0)
  return (
    <>
    <input type = 'number' placeholder='Temprature' onChange={(e) => setValue(parseInt(e.target.value))} />
    {renderKelvin({value : Math.floor(value + 273.15)})}
    {renderFahrenheit({value : Math.floor((value * 9) / 5 + 32)})}
    {/* <Kelvin value={Math.floor(value + 273.15)} /> */}
    {/* <Fahrenheit value ={Math.floor((value * 9) / 5 + 32)} /> */}
    
    </>
  )
}

export default TemperatureConverter