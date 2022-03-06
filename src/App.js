//import logo from './logo.svg';
import './App.css';
import './unit.css';
import './resultBox.css';
import React from "react";
import Unit from "./Unit"
import RatioCounter from "./RatioCounter";
import Pallet from "./Pallet";
import AddPallet from "./AddPallet";
//import Test from "./Test";
//import 'addPallet.css';
import './index.css';
//import AddColor from "./AddColor";
//import Color from "./Color"


const App = () => {
  return (
      <>
        <Unit/>
        <RatioCounter/>
          <Pallet/>
          <AddPallet/>
      </>
  )
}


export default App;
