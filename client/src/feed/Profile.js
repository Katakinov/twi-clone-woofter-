import React, {Component, useContext} from "react";
import "./Profile.css"
import Post from "./Post"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import profileItems from "../array/ProfileItems"
//import profilePostItems from "../array/ProfilePostItems"
import ItemsWid from "../array/WidjetsItems";
import WidgetsActual from "../widgets/WidgetsActual";
import axios from 'axios'
//import { AuthContext } from "../context/AuthContext";


/*const storage = localStorage.getItem('userData')
const second = JSON.parse(storage)
const third = second["userName"]

console.log(third)*/

//const auth = useContext(AuthContext)

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            profileAvatar: profileItems.profileAvatar || "https://img.favpng.com/16/2/3/koala-bear-clip-art-png-favpng-e9SK7y5GVZm012JrLSbkRVZ71.jpg",
            profileUserName: profileItems.profileUserName || "defaultUserName",
            tweetsNumber: profileItems.tweetsNumber || 0,
            backProfileImage: profileItems.backProfileImage || 'https://steamuserimages-a.akamaihd.net/ugc/1013814773810546845/83B0439703299AE4ECA5CA1A4A65490D50234ADD/',
            profileTagName: profileItems.profileTagName || "defaultTagName",
            profileVerified: profileItems.profileVerified || false,
            status: profileItems.status || "defaultStatus",
            following: profileItems.following || 0,
            followers: profileItems.followers || 0,
            tapBarStatus1: "Profile",
            poster: [],
            user: "",
        }
        this.tweetsRepliesTapBarClick =this.tweetsRepliesTapBarClick.bind(this)
        this.tweetsTapBarClick =this.tweetsTapBarClick.bind(this)
        this.mediaTapBarClick =this.mediaTapBarClick.bind(this)
        this.likesTapBarClick =this.likesTapBarClick.bind(this)

    }
    componentDidMount() {
        axios.get('/post').then(res => {
            const poster = res.data;
            this.setState({ poster: res.data });
            //console.log(this.state.poster)
        })
        const userN = JSON.parse(localStorage.getItem('userData'))
        //console.log(userN.userName)
        const tuk = userN.userId
        console.log(tuk + " = tuk")
        //this.setState({ user: tuk })



        //this.setState({ user: userN.userNmae})

        /*axios.get('/find/current').then(res => {
            const user = res.data;
            this.setState({ user: res.data });
            console.log(this.state.user)
        })*/

        

        /*this.setState({ user: third})
        console.log("hi" + this.setState({user: third}))*/

        //console.log("Hi" + third)

        /*axios.get('/find/current', (req, res) => {
            req.user = third
        });*/

        axios.get(`/find/current/${tuk}`).then((res) => {
            const currentUser = res.data
            console.log(res.data + " = res.data")
            this.setState({ user: currentUser.name });
        })

        /*axios.get('/find/current').then(res => {
            const user = res.data;
            this.setState({ user: res.data});
            console.log(user)
        })*/
    }

    tweetsTapBarClick() {
        this.setState({tapBarStatus1: "Profile"});
    }
    tweetsRepliesTapBarClick() {
        this.setState({tapBarStatus1: "Tweets&Replies"});
    }
    mediaTapBarClick() {
        this.setState({tapBarStatus1: "Media"});
    }
    likesTapBarClick() {
        this.setState({tapBarStatus1: "Likes"});
    }

    render() {
        //console.log(localStorage.getItem("userData"))
        let post;
        if (this.state.tapBarStatus1 == "Profile")
                {
                    post = this.state.poster.map((post, index) => {
                        if (post.name == this.state.user){
                            return(
                                <Post
                                    userName={post.name}
                                    avatar={post.avatar}
                                    verified={post.verified && true}
                                    tagName={post.tagName}
                                    postTime={post.date}
                                    postText={post.text}
                                    postImage={post.image}
                                    likeNumber={post.likeNumber}
                                    commentNumber={post.commentNumber}
                                    shareNumber={post.shareNumber}
                                    retweetNumber={post.retweetNumber}
                                    key={index}
                                />
                                )
                            }
                        }
                    )
                }
                else if (this.state.tapBarStatus1 == "Tweets&Replies")
                {
                    post = this.state.poster.map((post, index) => {
                        return(
                            <Post
                                userName={post.name}
                                avatar={post.avatar}
                                verified={post.verified && true}
                                tagName={post.tagName}
                                postTime={post.date}
                                postText={post.text}
                                postImage={post.image}
                                likeNumber={post.likeNumber}
                                commentNumber={post.commentNumber}
                                shareNumber={post.shareNumber}
                                retweetNumber={post.retweetNumber}
                                key={index}
                            />
                            )
                        }
                    )
                }
                else if (this.state.tapBarStatus1 == "Likes")
                {
                    post = this.state.poster.map((post, index) => {
                        if (post.liked){
                            return(
                                <Post
                                    userName={post.name}
                                    avatar={post.avatar}
                                    verified={post.verified && true}
                                    tagName={post.tagName}
                                    postTime={post.date}
                                    postText={post.text}
                                    postImage={post.image}
                                    likeNumber={post.likeNumber}
                                    commentNumber={post.commentNumber}
                                    shareNumber={post.shareNumber}
                                    retweetNumber={post.retweetNumber}
                                    key={index}
                                />
                                )
                            }
                        }
                    )
                }
                else if (this.state.tapBarStatus1 == "Media")
                {
                    post = this.state.poster.map((post, index) => {
                        if (post.image){
                            return(
                                <Post
                                    userName={post.name}
                                    avatar={post.avatar}
                                    verified={post.verified && true}
                                    tagName={post.tagName}
                                    postTime={post.date}
                                    postText={post.text}
                                    postImage={post.image}
                                    likeNumber={post.likeNumber}
                                    commentNumber={post.commentNumber}
                                    shareNumber={post.shareNumber}
                                    retweetNumber={post.retweetNumber}
                                    key={index}
                                />
                                )
                            }
                        }
                    )
                }
        return (
            <div className="profile">
                <div className="profile__header">
                    <KeyboardBackspaceIcon fontSize="small"/>
                    <div className="profile__headerDandT">
                        <span className="dispNameHeader">{this.state.user}</span>
                        <span className="tweetsHeader">{this.state.tweetsNumber} Tweets</span>
                    </div>
                </div>
                <div className="profileBody">
                    <div className="upSide">
                        <img className="backProfileImage" src={this.state.backProfileImage}/>
                    </div>
                    <div className="downSide">
                        <div className="avatarAndEdit">
                            <a className="avatar">
                                <img src={this.state.profileAvatar} className="avatarProfile"></img>
                            </a>
                            <a className="editButton" href="#">Edit profile</a>
                        </div>
                        <div className="displayName">{this.state.user}</div>
                        <div className="tagName">
                            {this.state.user.email}
                            {this.state.profileVerified && <VerifiedUserIcon className="post__badge"/>}
                        </div>
                        <div className="profileStatus">
                            {this.state.status}
                        </div>
                        <div className="profileCountFollow">
                            <span className="following">{this.state.following} Following</span>
                            <span>{this.state.followers} Followers</span>
                        </div>
                    </div>
                </div>
                <div className="profile__butBar">
                    <button onClick={this.tweetsTapBarClick} className="profile_tapBarButton">Tweets</button>
                    <button onClick={this.tweetsRepliesTapBarClick} className="profile_tapBarButton">Tweets & Replies</button>
                    <button onClick={this.mediaTapBarClick} className="profile_tapBarButton">Media</button>
                    <button onClick={this.likesTapBarClick} className="profile_tapBarButton">Likes</button>
                </div>
                
                {post}
        
                <div className="exploreWid">
                    <h2>Who to follow</h2>
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
            </div>
        );
    }
}

export default Profile;