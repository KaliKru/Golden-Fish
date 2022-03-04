import React, {useState} from 'react';
import './addPallet.css';

function AddPallet() {
    const [pallet, setPallet] = useState([]);
    const [color, setColor] = useState([]);
    const [rgb, setRgb] = useState([]);

    const addColor = () => {
        setPallet(prev => [...prev, '#' + color])
    }

    const handleColor = (event) => {
        setColor(event.target.value)
    }

    const handleRGB = (rgb) => {
        setRgb(rgb)
    }

    const inputColor = (color) => {
        setColor(color);
    }


    return (
        <div>
            <div className={"stylePallet"}>
                <div className={"styleRatio"}>Your pallet</div>
                <button onClick={addColor}>new color</button>
                {pallet.map(color => <div style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "red",
                }} onChange={handleColor} onInput={() => inputColor('blue')}/>
                    )}
                <div>pink color hex code</div>

                <form>
                    <input type={"text"} value={color} placeholder="type HEX number" onChange={handleColor}/>
                    <div style={{backgroundColor: "lightgray"}}>

                        <h5 >{isNaN(color) ? "num only" : "HEX:"}<input onChange={handleColor}/></h5>
                    </div>
                    <input placeholder="type RGB number" onChange={handleRGB} onSubmit={() => handleRGB('rgb')}/>
                </form>
            </div>

        </div>
    );
}

export default AddPallet;