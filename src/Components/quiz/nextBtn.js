import React from "react";
import IconButton from '@mui/material/IconButton';
import './nextBtn.css'


export const NextBtn = (props) => {
    const {action} = props;
    return (
        <div className="nextBtn__container">
            <IconButton className="nextBtn" onClick={action}> 
                <i className="fa-solid fa-fish fa-6x">
                </i>
            </IconButton>
        </div>
    );
};