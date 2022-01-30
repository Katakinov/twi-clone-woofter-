import React from "react";
import './BigIcon.css';


//active был с Icon
function BigIcon({ Icon }) {
    return(
        <div className={"petsIconBig"}>
            <Icon />
        </div>
    );
}

export default BigIcon;