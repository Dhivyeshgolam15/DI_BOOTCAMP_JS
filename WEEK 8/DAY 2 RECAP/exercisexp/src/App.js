// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Car from './component/car';
import Event from './component/event';
import Phone from './component/phone';
import Color from './component/color';
 const carInfo= {
    name: "Ford",
    model: "Mustang"
  };

const App = ()=>{
  return (
     <>
       <Car model={carInfo.model}/>
        <Event/>
        <Phone/>
        <Color/>

      </>
    );
}


export default App;