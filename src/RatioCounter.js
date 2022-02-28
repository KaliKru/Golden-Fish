import React, {useState, useEffect} from 'react';

function RatioCounter() {
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [sizeX, setSizeX] = useState("100px");
    const [sizeY, setSizeY] = useState("100px");

    const handleX = (event) => {
        setX(event.target.value);
    }

    const handleY = (event) => {
        setY(event.target.value);
    }

    useEffect(() => {
        console.log(resultX);
        document.getElementById(sizeY).width = `${setSizeX}`;
    }, [x]);



    const resultX = () => {
        setSizeX(prev => ((prev - 100) + (+x * 1.6)));
    }
//zeruję sizeX, a pierwotny wymiar 100px wynika z tego że chcę pokazać użytkownikowi od początku jakiś kwadrat.
// //Po wyzerowaniu równanie wg wzoru złotego podziału

    const resultY = () => {
        setSizeY( prev => ((prev - 100) + (+y / 1.6)));
    }




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

            <div id={sizeY} onChange={resultX} style={{
                width: +x * 1.6,
                height: sizeY,
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"}}>width: {+x * 1.6} height:{+y / 1.6}</div>



        </div>
    );
}


export default RatioCounter;