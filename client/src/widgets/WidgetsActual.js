import React from "react";
import "./WidgetsActual.css"
//import {Button} from "@material-ui/core";

function WidgetsActual({textActual, nameActual, countTweet}) {
    return(
        <div className="widgets__actual">
            <div className="widgets__actualHeader">
                <span className="actualName">{nameActual}</span>
                <div className="threeEntry">...</div>
            </div>
            <div className="widgets__actualBody">
                {textActual}
            </div>
            <div className="widgets__actualFooter">
                <span>{countTweet}</span>
                <span> Tweets</span>
            </div>
        </div>
    )
}

export default WidgetsActual;