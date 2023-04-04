import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './dropdown.css'


export const DropdownDiff = () => {
    const options = [
                    {value: "0", label:'Easy'},
                    {value: "1", label: 'Medium'},
                    {value: "2", label: "Hard"}
    ];

    return (
        <div className="dropdown">
            <p className="dropdown__text">Difficulty Level:</p>
            <Dropdown 
                options={options}
                placeholder="Choose level"
                placeholderClassName={"diff-level"}
                />   
        </div>
    )
}