import React, {useState} from 'react';

function RatioCounter(props) {
    const [x, setX] = useState("");
    const [y, setY] = useState("");

    return (
        <div>
            <form>
                <input type={"text"} value={x} onChange={event => setX(event.target.value)}/>
                <input type={"text"} value={y} onChange={event => setY(event.target.value)}/>
            </form>
            <h4>{isNaN(x)  ? "Golden Fish understands only numbers ;)" : +x * 1.6}</h4>
            <h4>{isNaN(y)  ? "Golden Fish understands only numbers ;)" : +y / 1.6}</h4>
        </div>
    );
}

export default RatioCounter;