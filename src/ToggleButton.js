import React from "react";

const Toggle = ({ changeMode }) => {
    return (
        <div id="toggle_button">
            <input type="checkbox" onClick={changeMode} id="checkbox_btn" />
            <label for="checkbox_btn" />
        </div>
    );
};
export default Toggle;
