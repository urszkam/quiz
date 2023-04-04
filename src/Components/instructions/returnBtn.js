import React from "react";
import './returnBtn.css';


export const ReturnBtn = (props) => {
    const {action} = props;
    return (
        <div className="returnBtn__container">
        <button className="returnBtn" onClick={action} type="button">
            <h2 className="returnBtn__text">
                RETURN HOME
            </h2>
        </button>
        </div>
    );
};


export default ReturnBtn;
