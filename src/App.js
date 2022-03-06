import React, {Component} from "react";
import ReactDOM from "react-dom";
//import logo from './logo.svg';
import './App.css';
import './unit.css';
import './resultBox.css';
//import Unit from "./Unit"
import RatioCounter from "./RatioCounter";
//import Pallet from "./Pallet";
import AddPallet from "./AddPallet";
//import Test from "./Test";
//import 'addPallet.css';
import './index.css';
//import AddColor from "./AddColor";
//import Color from "./Color";
import ColorsManager from "./ColorsManager";


const App = () => {
  return (
      <>
        <RatioCounter/>
          <AddPallet/>
          <ColorsManager/>
      </>
  )
}


export default App;

//ReactDOM.render(<App/>, document.getElementById("app"));