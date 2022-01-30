import React, {Component} from "react";
import "./Profile.css"
import Post from "./Post"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import {useParams} from "react-router-dom";

const User = () => {
    const {id} = useParams();
    return (
        <div className="profile">
            <div className="profile__header">
                <KeyboardBackspaceIcon fontSize="small"/>
                <div className="profile__headerDandT">
                    <span className="dispNameHeader">{id}</span>
                    <span className="tweetsHeader"> Tweets</span>
                </div>
            </div>
            <div className="profileBody">
                <div className="upSide">
                    <img className="backProfileImage" src="https://steamuserimages-a.akamaihd.net/ugc/1013814773810546845/83B0439703299AE4ECA5CA1A4A65490D50234ADD/"/>
                </div>
                <div className="downSide">
                    <div className="avatarAndEdit">
                        <a className="avatar">
                            <img src="https://img.favpng.com/16/2/3/koala-bear-clip-art-png-favpng-e9SK7y5GVZm012JrLSbkRVZ71.jpg" className="avatarProfile"></img>
                        </a>
                        <a className="editButton" href="#">Edit profile</a>
                    </div>
                    <div className="displayName">{id}</div>
                    <div className="tagName">
                        profileTagName
                        {<VerifiedUserIcon className="post__badge"/>}
                    </div>
                    <div className="profileStatus">
                        status
                    </div>
                    <div className="profileCountFollow">
                        <span className="following">followingCount(0) Following</span>
                        <span>followersCount(0) Followers</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User;