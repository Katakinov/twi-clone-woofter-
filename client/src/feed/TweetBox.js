import React from "react";
import './TweetBox.css'
import SidebarOption from "../trifle/SidebarOption";
import { Avatar, Button } from '@material-ui/core'
import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import GifIcon from '@material-ui/icons/Gif';
import PollOutlinedIcon from '@material-ui/icons/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

function TweetBox({profileAvatar}) {
    //const [tweetMessage, setTweetMessage] = useState("");
    //const [tweetImage, setTweetImage] = useState("");
    //const sendTweet = e => {
        //e.preventDefault();
    //}

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src={profileAvatar}/>
                    <input
                        //onChange={e => setTweetMessage(e.target.value)}
                        value=""
                        placeholder="What's happening?"
                        type="text"/>
                </div>
                <div className="buttonBar">
                    <SidebarOption Icon={CropOriginalIcon}/>
                    <SidebarOption Icon={GifIcon}/>
                    <SidebarOption Icon={PollOutlinedIcon}/>
                    <SidebarOption Icon={SentimentSatisfiedOutlinedIcon}/>
                    <SidebarOption Icon={EventOutlinedIcon}/>
                    <Button /*onClick={sendTweet}*/ type="submit" className="tweetBox_tweetButton">Tweet</Button>
                </div>
            </form>
        </div>
    )
}

export default TweetBox;
                /* https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png */
