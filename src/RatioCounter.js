import React, {useState, useEffect} from 'react';

function RatioCounter(props) {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    //const [size, setSize] = useState("x,y");

    const handleX = (event) => {
        setX(event.target.value);
    }

    const handleY = (event) => {
        setY(event.target.value);
    }
    /*
        const handleSize = (event) => {
            setSize(event.target.value);
        }
        useEffect(() => {
            document.element.height = size + '';
        }, [size]);
        const addSize = () => {
            setSize(prev => prev + x);
        }

     */


    return (
        <div>
            <div className={"styleRatio"}>
                <form>
                    <input className={"inputRatio"} type={"text"} value={x} onChange={handleX}/>
                </form>
                <div className={"effectRatio"}>
                    <h4>{isNaN(x)  ? "Golden Fish understands only numbers ;)" : "longer segment: " +x * 1.6}</h4>
                </div>

                <form>
                    <input className={"inputRatio"} type={"text"} value={y} onChange={handleY}/>
                </form>
                <div className={"effectRatio"}>
                    <h4>{isNaN(y)  ? "Golden Fish understands only numbers ;)" : "shorter segment: " +y / 1.6}</h4>
                </div>

            </div>
        </div>
    );
}

/*

//<div style={{backgroundColor: "red", width: "10px", height: "10px"}} onChange={handleSize} {addSize(width: `$x`, height: `$y`)}>display size</div>
 */

export default RatioCounter;