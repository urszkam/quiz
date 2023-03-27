import React from "react";

export const NextBtn = (props) => {
    const {action} = props;
    return (
        <div className="nextBtn__container">
            <button className="nextBtn" onClick={action}> 
                <p className="nextBtn__text">Next</p>
                <i class="fa-solid fa-fish fa-shake"></i>
            </button>
        </div>
    );
};