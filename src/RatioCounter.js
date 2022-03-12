import React, {useState} from 'react';
import { FaFish } from 'react-icons/fa';
import Unit from "./Unit";
import './index.css';
import "./ColorsManager";
import './App.css';
import './unit.css';
import './resultBox.css';


function RatioCounter() {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [fixed, setFixed] = useState(0);


    const handleX = (event) => {
        if(!isNaN(event.target.value)) {
            setX(event.target.value);
            setY((Math.round(event.target.value * 1.6)).toFixed(fixed)  + '')
        }
    }

    const handleY = (event) => {
        if(!isNaN(event.target.value)) {
            setY(event.target.value);
            setX((Math.round(event.target.value / 1.6)).toFixed(fixed) + '');

        }

    }

    return (
        <div>
            <Unit fixedFoo={setFixed}/>
            <div className={"styleRatio"}>
                <form>
                    <input className={"inputRatio"} type={"text"} value={x} placeholder="type shorter value..." onChange={handleX}/>
                </form>

                <form>
                    <input className={"inputRatio2"} type={"text"} value={y} placeholder="or type longer value..." onChange={handleY}/>
                </form>

            </div>


            <div className={"resultBox"}>
                <FaFish style={{
                    width: y + 'px',
                    height: x + 'px',
                    color: "darkslateblue",
                    borderRadius: "3px",
                    borderColor: "pink",
                    border: '1px',
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>longer: {y}px shorter:{x}px
                </FaFish>
            </div>


        </div>
    );
}

export default RatioCounter;