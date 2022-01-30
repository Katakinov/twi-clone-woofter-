import React, {Component} from "react";
import "./Home.css"
import "./Post"
import "./TweetBox"
import Post from "./Post";
import TweetBox from "./TweetBox";
import homePostItems from "../array/HomePostItems";
import axios from 'axios'

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            poster: [],
        }
    }

    /*state = {
        poster: []
    }*/

    componentDidMount() {
        axios.get('/post').then(res => {
            const poster = res.data;
            this.setState({ poster: res.data });
            console.log(this.state.poster)
        })
    }



    render() {
        return (
            <div className="feed">
                <div className="feed__header">
                    <div>Home</div>
                </div>
                <TweetBox profileAvatar="https://img.icons8.com/cotton/452/dog-sit--v2.png"/>
                {this.state.poster.map((post, index) => {
                    return (
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
                })}
            </div>
        )
    }
}



export default Home;