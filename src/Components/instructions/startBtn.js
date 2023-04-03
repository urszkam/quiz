import React from "react";
import IconButton from '@mui/material/IconButton';
import './startBtn.css'

// export const StartBtn = (props) => {
//     const {action} = props;
//     return (
//         <div className="startBtn__container">
//             <IconButton className="startBtn" onClick={action}>
//                 <i className="fa-solid fa-fish fa-6x"></i>
//             </IconButton>
//         </div>
//     );
// };

export const StartBtn = () => {
    return (
        // <button type="button">Click me</button>
        <button className="startBtn" type="button">
            <h2 className="startBtn__text">
                START
            </h2>
        </button>
    )
}

export default StartBtn;
