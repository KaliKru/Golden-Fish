import React, {useState} from 'react';

function RatioCounter(props) {
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    return (
        <div>
            <div className={"styleRatio"}>
                <form>
                    <input className={"inputRatio"} type={"text"} value={x} onChange={event => setX(event.target.value)}/>
                    <input className={"inputRatio"} type={"text"} value={y} onChange={event => setY(event.target.value)}/>
                </form>
                <div className={"effectRatio"}>
                    <h4>{isNaN(x)  ? "Golden Fish understands only numbers ;)" : "longer segment: " +x * 1.6}</h4>
                    <h4>{isNaN(y)  ? "Golden Fish understands only numbers ;)" : "shorter segment: " +y / 1.6}</h4>
                </div>
            </div>
        </div>
    );
}

export default RatioCounter;