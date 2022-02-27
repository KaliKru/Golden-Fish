import React, {useState} from 'react';

function Unit(props) {
    const [selectUnit, setSelectUnit] = useState("");
    const handleSelect = (event) => {
        setSelectUnit(event.target.value)
    }



    return (
        <div>
            <div>
                <p>{selectUnit}</p>
                <select value={selectUnit} onChange={handleSelect}>
                    <option value="">Select unit</option>
                    <option value={"let's count in pixel"}>px</option>
                    <option value={"let's count in milimeter"}>mm</option>
                </select>
            </div>
        </div>
    );
}

export default Unit;