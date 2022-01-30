import React from "react";
import "./Explore.css"
import ItemsWid from "../array/WidjetsItems";
import WidgetsActual from "../widgets/WidgetsActual";
import SearchIcon from "@material-ui/icons/Search";
import {Settings} from "@material-ui/icons";
import Post from "../feed/Post";
import homePostItems from "../array/HomePostItems";

function Explore() {
    return(
        <div  className="explore">
            <div className="upperExplore">
                <div className="widgetsExplore__input">
                    <SearchIcon className="widgetsExplore__searchIcon" />
                    <input placeholder="Search Twitter" type="text" />
                </div>
                <a className="settingsButton" href="#">
                    <Settings className="settingsIcon"/>
                </a>
            </div>
            <div className="exploreWid">
                <h2>Trends for you</h2>
                {ItemsWid.map((item, index) => {
                    return(
                        <WidgetsActual nameActual={item.nameActual}
                                       textActual={item.textActual}
                                       countTweet={item.countTweet}
                                       key={index}
                        />
                    )
                })}
                <a className="moreInfo" href="#">Show more</a>
            </div>
            <div className="explorePost">
                {homePostItems.map((item, index) => {
                    return(
                        <a className="postButton">
                            <Post
                                userName={item.userName}
                                tagName={item.tagName}
                                verified={item.verified && true}
                                postTime={item.postTime}
                                postText={item.postText}
                                postImage={item.postImage}
                                avatar={item.avatar}
                                commentNumber={item.commentNumber}
                                retweetNumber={item.retweetNumber}
                                likeNumber={item.likeNumber}
                                shareNumber={item.shareNumber}
                                key={index}
                            />
                        </a>
                    )
                })}
            </div>
        </div>
    )
};

export default Explore;