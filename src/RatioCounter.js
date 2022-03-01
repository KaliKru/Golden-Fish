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

/*
    const resultX = () => {
        setSizeX(prev => ((prev - 100) + (+x * 1.6)));
    }

 */
    const resultX = () => {
        setSizeX(() => +x * 1.6);
    }
//zeruję sizeX, a pierwotny wymiar 100px wynika z tego że chcę pokazać użytkownikowi od początku jakiś kwadrat.
// //Po wyzerowaniu równanie wg wzoru złotego podziału
/*
    const resultY = () => {
        setSizeY( prev => ((prev - 100) + (+y / 1.6)));
    }


 */
    const resultY = () => {
        setSizeY( () => +y / 1.6);
    }

   const funCount = () => {
        if (x >= 1) {
            return (
                <div id={sizeY} style={"width: `${x}`" && "height: `${x}` * 1.6"}/>
            )
        } else if (y >= 1) {
            return (
                <div id={sizeY} style={"width: `${y}`/ 1.6" && "height: `${y}`"}/>
            )
        }
    }



    return (
        <div>
            <div className={"styleRatio"}>
                <form>
                    <input className={"inputRatio"} type={"text"} value={x} placeholder="type shorter value..." onChange={handleX}/>
                    <div className={"effectRatio"}>
                        <h4>{isNaN(x) ? "Golden Fish understands only numbers ;)" : ""}
                        </h4>
                    </div>

                </form>

                <form>
                    <input className={"inputRatio2"} type={"text"} value={y} placeholder="or type longer value..." onChange={handleY}/>
                    <div className={"effectRatio2"}>
                        <h4>{isNaN(y)  ? "Golden Fish understands only numbers ;)" : ""}</h4>
                    </div>

                </form>

            </div>


            <div className={"resultBox"}>
                <div id={sizeY} onChange={funCount} style={{
                    width: +x ? +x * 1.6 : sizeX,
                    height: +y ? +y / 1.6 : sizeY,
                    backgroundColor: "darkslateblue",
                    borderRadius: "3px",
                    color: "white",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"}}>longer: {+x * 1.6}px shorter:{+x}px
                    </div>
            </div>


        </div>
    );
}

/*
            {
                // warunkowa z if rozpisana nie dziala
                (() => {
                if (x >= 1) {
                return (
                <div style={"width: `${x}`" && "height: `${x}` * 1.6"}/>
                )
            } else if (y >= 1) {
                return (
                <div style={"width: `${y}`/ 1.6" && "height: `${y}`"}/>
                )
            }
            })()
            }
  */



/*
  // z poprzedniej wersji warunku
  <div className={"effectRatio"}>
                    <h4>{isNaN(x)  ? "Golden Fish understands only numbers ;)" : "longer segment: " +x * 1.6}
                       </h4>
                </div>



                <div className={"effectRatio2"}>
                    <h4>{isNaN(y)  ? "Golden Fish understands only numbers ;)" : "shorter segment: " +y / 1.6}</h4>
                </div>




/*
//{x ? "longer: " +x * 1.6 : ""}
// {y ? "shorter: " +y / 1.6 : ""}
//to bylo przy napisach obok inputów ale jest to juz niepotrzebne bo mam prostokąt niżej, wktorym wyswietlaja sie wartosci
 */


export default RatioCounter;