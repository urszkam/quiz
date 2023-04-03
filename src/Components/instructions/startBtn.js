import React from "react";
import IconButton from '@mui/material/IconButton';
import './startBtn.css'


export const StartBtn = (props) => {
    const {action} = props;
    return (
        <div className="startBtn__container">
            <IconButton className="startBtn" onClick={action}>
                <i className="fa-solid fa-fish fa-6x"></i>
            </IconButton>
        </div>
    );
};
