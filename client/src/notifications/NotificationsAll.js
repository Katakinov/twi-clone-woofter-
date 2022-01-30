import React from "react";
import "./NotificationsAll.css"
import All from "./All"
import {NavLink} from "react-router-dom";

function NotificationsAll() {
    return(
        <div className="notificationsAll">
            <div className="notificationsAll__header">
                <div>Notifications</div>
            </div>
            <div className="notificationsAll__body">
                <NavLink className="notificationsAll1__button" to="/notifications/all">
                    All
                </NavLink>
                <NavLink className="notificationsAll2__button" to="/notifications/mentions">
                    Mentions
                </NavLink>
            </div>
            <All/>
        </div>
    )
};

export default NotificationsAll;