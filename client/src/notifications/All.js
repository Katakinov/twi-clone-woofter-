import React, {Component} from "react";
import "./All.css"
import {Avatar} from "@material-ui/core";


function All() {
    return(
        <div className="all__body">
            <Avatar src="https://img.favpng.com/16/2/3/koala-bear-clip-art-png-favpng-e9SK7y5GVZm012JrLSbkRVZ71.jpg" className="avatarProfileNotifications"></Avatar>
            <div className="all__text">People followed you</div>
        </div>
    )
};

export default All;