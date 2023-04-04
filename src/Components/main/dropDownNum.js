import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './dropdown.css';


export const DropdownNum = () => { 
    const options = [
                    {value: "0", label:'1'},
                    {value: "1", label: '2'},
                    {value: "2", label: "3"},
                    {value: "3", label: '4'},
                    {value: "4", label: "5"}
    ];

    const defaultOption = options[0];

    return (
        <div className="dropdown">
            <p className="dropdown__text">Number of questions:</p>
            <Dropdown 
                options={options}
                placeholder="Choose number"
                placeholderClassName={"question-number"}
                />   
        </div>
    )
}