import React from "react";
import IconButton from '@mui/material/IconButton';
import './nextBtn.css'


export const NextBtn = (props) => {
    const {action, id, id_div, id_btn} = props;
    return (
        <div className="nextBtn__container" id={id_div}>
            <IconButton className="nextBtn" onClick={action} id={id_btn}> 
                <i className="fa-solid fa-fish fa-6x" id={id}>
                </i>
            </IconButton>
        </div>
    );
};
