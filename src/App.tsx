import * as React from 'react';
import './style.css';
import Listings from './components/presentational/Listings.tsx';
import TemperatureConverter, { Fahrenheit, Kelvin } from './components/render-props/TemperatureConverter.tsx';

export default function App() {
  return <Listings dummyData = 'some dummy data' />;
  // return <TemperatureConverter renderKelvin = {({value}) => <Kelvin value ={value}/>} renderFahrenheit = {({value}) => <Fahrenheit value={value}/>}/>
}
