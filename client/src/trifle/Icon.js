import React from "react";
import './Icon.css';


//active был с Icon
function PetsIconClick({ Icon }) {
    return(
        <div className={"petsIconMini ${active && 'sidebarOption--active'}"}>
            <Icon />
        </div>
    );
}

export default PetsIconClick;