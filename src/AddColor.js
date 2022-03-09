
import React, {useState} from 'react';
const URL = "http://localhost:3000/colors";


function AddColor({ fetchColors, nameVal, id}) {

    const [name, setName] = useState("");
    const [hex, setHex] = useState("");
    const [rgb, setRgb] = useState("");
    const [cmyk, setCmyk] = useState("");

    const saveColor = (event) => {
        event.preventDefault();
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                name,
                hex,
                rgb,
                cmyk
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error("Błąd!");
            })
            .then(data => {
                console.log(data);
                fetchColors();
            })
            .catch(error => console.log(error));
    }

    return (
        <form onSubmit={saveColor}>
            <input type="text" placeholder="type name" value={name} onChange={e => setName(e.target.value)}/>
            <input type="text" placeholder="type hex" value={hex} onChange={e => setHex(e.target.value)}/>
            <input type="text" placeholder="type rgb" value={rgb} onChange={e => setRgb(e.target.value)}/>
            <input type="text" placeholder="type cmyk" value={cmyk} onChange={e => setCmyk(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default AddColor;

