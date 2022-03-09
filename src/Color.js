import React from 'react';
import AddColor from "./AddColor";

const API = "http://localhost:3000";

const data = {
    name: "test Name",
    hex: "test hex"
};

function Color({ id, name, hex, rgb, cmyk, removeColor }) {
    return (
        <>
            <li key={id}>
                <h2>{name}</h2>
                <h2>{hex}</h2>
                <h2>{rgb}</h2>
                <h2>{cmyk}</h2>
                <button onClick={() => removeColor(id)}>Delete</button>
            </li>
        </>
    );
}

export default Color;
