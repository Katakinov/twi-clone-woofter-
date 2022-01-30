import React from "react";
import './Widgets.css';
import "../trifle/SidebarOption"
/*import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";*/
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from '@material-ui/icons/Settings';
//import {Button} from "@material-ui/core";
import SidebarOption from "../trifle/SidebarOption";
//import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import WidgetsActual from "./WidgetsActual"
import ItemsWid from "../array/WidjetsItems";
import {Settings} from "@material-ui/icons";

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <div className="widgets__header">
                    <h2>Trends for you</h2>
                    <a className="settings__icon">
                        <Settings/>
                    </a>
                </div>
                {ItemsWid.map((item, index) => {
                    return(
                        <WidgetsActual nameActual={item.nameActual}
                                       textActual={item.textActual}
                                       countTweet={item.countTweet}
                                       key={index}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Widgets;