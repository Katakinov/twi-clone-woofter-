import React from "react";
import './SidebarOption.css';

//active был с Icon и text
function SidebarOption({ text, Icon }) {
    return(
        <div className={"sidebarOption"}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;