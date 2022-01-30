import React from "react";
import "./WhoFollowWidActual.css"
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

function WhoFollowWidActual({userName, tagName, avatar, verified}) {
    return(
        <div className="whoFollowActual">
            <div className="whoFollowActual__header">
                <div className="whoFollowProfileBar">
                    <Avatar src={avatar} className="avatarProfileWid"></Avatar>
                    <div className="whoFollowActual__tagAndNameAndVer">
                        <div className="whoFollowActual__verAndName">
                            <span className="whoFollowActual__name">{userName}</span>
                            {verified && <VerifiedUserIcon className="post__badge" />}
                        </div>
                        <span className="whoFollowActual__name">{tagName}</span>
                    </div>
                </div>
                <div>
                    <a className="followButton">
                        Follow
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WhoFollowWidActual;