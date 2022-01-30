import React from "react";
import './Post.css'
import {Avatar, Button} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import RepeatIcon from '@material-ui/icons/Repeat';
import PublishIcon from '@material-ui/icons/Publish';

function Post(
    {
    userName="def Name",
    tagName="def Tag",
    verified = false,
    postTime="99:99",
    postText = "",
    postImage,
    avatar = "https://img.icons8.com/cotton/452/dog-sit--v2.png",
    likeNumber=0,
    commentNumber=0,
    shareNumber=0,
    retweetNumber= 0,
    likedCl="comment"
})
{
    /*function handleLike(likedCl) {
        console.log("button clicked")
    }*/
    return (
        <div className='post'>
            <div className='post__avatar'>
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {userName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />}
                                @{tagName}
                                <div className="post__headerTime">
                                    {postTime}
                                </div>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{postText}</p>
                        <img className="contentImg" src={postImage}/>
                    </div>
                </div>
                <div className="post__footer">
                    <Button variant="text" size="small" className="noActive">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <h5>{commentNumber}</h5>
                    </Button>

                    <Button variant="text" size="small" className="noActive">
                        <RepeatIcon fontsize="small" />
                        <h5>{retweetNumber}</h5>
                    </Button>
                    <Button variant="text" size="small" className="noActive">
                        <FavoriteBorderIcon fontsize="small" className={likedCl}/>
                        <h5>{likeNumber}</h5>
                    </Button>

                    <Button variant="text" size="small" className="noActive">
                        <PublishIcon fontsize="small" />
                        <h5>{shareNumber}</h5>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Post;