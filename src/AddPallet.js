import React, {useState} from 'react';
import './addPallet.css';

function AddPallet({onAddPallet}) {
    const [pallet, setPallet] = useState("");
    const [color, setColor] = useState("");


    const handleAddPallet = e => {
        e.preventDefault();

        const palletName = {
            pallet,
            color
        };
        //addPallet(palletName, onAddPallet);
    };

    let addColor;


    return (
        <div>
            <div className="stylePallet">
                <div className="styleRatio">Your pallet</div>
                <form onSubmit={handleAddPallet}>
                    <div>
                        <input type="text"
                               name="pallet"
                               placeholder="pallet name"
                               value={pallet}
                               onChange={e => setPallet(e.target.value)}/>
                    </div>
                    <div>
                        <input type="text"
                               name="color"
                               placeholder="type color HEX"
                               value={color}
                               onChange={e => setColor(e.target.value)}/>
                    </div>
                    <button onClick={addColor} icon={"fas fa-plus-circle"}>add color</button>

                </form>

            </div>

        </div>
    );
}

export default AddPallet;




/* //versja z 4.03.
function AddPallet() {
const [pallet, setPallet] = useState([]);
const [color, setColor] = useState([]);
//const [rgb, setRgb] = useState([]);


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
                <input placeholder="type RGB number" onChange={handleRGB} onSubmit={() => handleRGB('rgb')}/>

                    <h5 >{isNaN(color) ? "num only" : "HEX:"}<input onChange={handleColor}/></h5>
                </div>

            </form>
        </div>

    </div>
);
}

export default AddPallet;

// to wylacam narazie - dalsza część
//<input placeholder="type RGB number" onChange={handleRGB} onSubmit={() => handleRGB('rgb')}/>

 */