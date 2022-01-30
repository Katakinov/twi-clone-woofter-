import React from "react";
import "./WhoFollowWidjets.css"
import SearchIcon from "@material-ui/icons/Search";
import WhoFollowItems from "../array/WhoFollowItems";
import WhoFollowWidActual from "./WhoFollowWidActual";

function WhoFollowWid() {
    return(
        <div className='whoFollowWid'>
            <div className="whoFollowWid__widgetContainer">
                <div className="whoFollowWid__header">
                    <h2>Who to follow</h2>
                </div>
                {WhoFollowItems.map((item, index) => {
                    return(
                        <WhoFollowWidActual userName={item.userName}
                                       tagName={item.tagName}
                                       avatar={item.avatar}
                                       verified={item.verified && true}
                                       key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default WhoFollowWid;