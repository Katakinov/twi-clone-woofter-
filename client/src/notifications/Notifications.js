import React from "react";
import "./Notifications.css"
import {NavLink} from "react-router-dom";

function Notifications() {
    return(
        <div className="notifications">
            <div className="notifications__header">
                <div>Notifications</div>
            </div>
            <div className="notifications__body">
                <NavLink className="notifications__button" to="/notifications/all">
                    All
                </NavLink>
                <NavLink className="notifications__button" to="/notifications/mentions">
                    Mentions
                </NavLink>
            </div>
        </div>
    )
};

export default Notifications;