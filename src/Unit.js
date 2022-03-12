import React, {useState} from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FaFish } from 'react-icons/fa';


function Unit({fixedFoo}) {
    const [selectUnit, setSelectUnit] = useState("");
    const handleSelect = (event) => {
        setSelectUnit(event.target.value)
        fixedFoo(event.target.value)
    }


    return (
        <div>
            <div className={"styleUnit"}>
                <FaFish size="4em" color="purple"/>
                <div>Golden Fish knows the ratio!</div>
                <select value={selectUnit} onChange={handleSelect}>
                    <option value="">Select unit</option>
                    <option value={0}>px</option>
                    <option value={2}>mm</option>
                </select>
            </div>
        </div>
    );
}

export default Unit;