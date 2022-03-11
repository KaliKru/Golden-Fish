import React from 'react';
import AddColor from "./AddColor";
import "./Color.css";
import { FaTrash } from 'react-icons/fa';

const API = "http://localhost:3000";

const data = {
    name: "test Name",
    hex: "test hex"
};



function Color({ id, name, hex, rgb, cmyk, removeColor }) {
    return (
        <>
            <div className={"style-color"}>
                <li className={"style-list"} key={id}>
                    <div style={{
                        width: 50,
                        height: 50,
                        backgroundColor: hex,
                        borderRadius: 5,
                    }
                    }> </div>
                    <h2 className={"input-color"}>{name}</h2>
                    <h2>{hex}</h2>
                    <h2>{rgb}</h2>
                    <h2>{cmyk}</h2>
                    <FaTrash className={"icon-trash"}onClick={() => removeColor(id)}>Delete</FaTrash>
                </li>
            </div>
        </>
    );
}

export default Color;


/*

<button className={"color-btn"} onClick={() => removeColor(id)}>Delete</button>
 */