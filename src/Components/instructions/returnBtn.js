import React from "react";
import IconButton from '@mui/material/IconButton';
import './returnBtn.css';


// const Button = ({ message = "RETURN" }) => {
//     return (
//       <button type="button">{message}</button>
//     );
//   }
  
//   export default Button;
 

export const ReturnBtn = (props) => {
    const {action} = props;
    return (
        <div className="returnBtn__container">
            <IconButton className="returnBtn" onClick={action}>
                <i className="fa-solid fa-fish fa-6x"></i>
            </IconButton>
        </div>
    );
};

// export const ReturnBtn = () => {
//     return (
//         // <button type="button">Click me</button>
//         <button className="returnBtn" type="button">
//             <h2 className="returnBtn__text">
//                 BACK
//             </h2>
//         </button>
//     )
// }


export default ReturnBtn;