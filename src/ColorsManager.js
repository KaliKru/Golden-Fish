import React, {useState, useEffect} from 'react';
import AddColor from "./AddColor";
import Color from "./Color";


const URL = "http://localhost:3000/colors";

function ColorsManager() {
    const [colors, setColors] = useState([]);
    const getColors = () => {
        fetch(URL)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Błąd!");
            })
            .then((data) => {
                console.log(data);
                setColors(data);
            })
            .catch(error => console.log(error));
    }

    useEffect(getColors, []);

    const removeColor = (id) => {
        console.log("Removed", id);
        fetch(`${URL}/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                console.log(response.ok);
                getColors();
            })
            .catch(error => console.log(error));
    }

        return (
            <div>
                <div className={"rainbow1"}>Your pallets</div>
                <AddColor fetchColors={getColors}/>
                <ul>
                    {colors.length === 0
                        ? <p></p>
                        : colors.map(color => <Color key={color.id} id={color.id} name={color.name} hex={color.hex}
                                                     rgb={color.rgb} cmyk={color.cmyk} removeColor={removeColor}/>)
                    }
                </ul>
            </div>
        );
}


export default ColorsManager;