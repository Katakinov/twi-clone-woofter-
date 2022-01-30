import React from "react";
import "./NotificationsMentions.css"
import {NavLink} from "react-router-dom";

function NotificationsMentions() {
    return(
        <div className="notificationsMentions">
            <div className="notificationsMentions__header">
                <div>Notifications</div>
            </div>
            <div className="notificationsMentions__body">
                <NavLink className="notificationsMentions1__button" to="/notifications/all">
                    All
                </NavLink>
                <NavLink className="notificationsMentions2__button" to="/notifications/mentions">
                    Mentions
                </NavLink>
            </div>
            <div className="body_all1">
                <div className="for__span">
                    <span className="span__text1">
                        Nothing to see here — yet
                    </span>
                    <span className="span__text2">
                        When someone mentions you, you’ll find it here.
                    </span>
                </div>
            </div>
        </div>
    )
};

export default NotificationsMentions;