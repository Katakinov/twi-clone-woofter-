import React from "react";
import {Avatar, /*Button*/} from "@material-ui/core";
import "./ProfileBar.css"

function ProfileBar({url, name, tag}){
    return(
        <a href="/profile" className="linkProf">
        <button className="profileBar">
            <Avatar className="avatar" src={url}/>
            <div className="aliases">
                <span className="profileName">
                    {name}
                </span>
                <span className="profileTag">
                    @{tag}
                </span>
            </div>
            <a href="#" className="threeEntry">...</a>
        </button >
        </a>
    )
}

export default ProfileBar;