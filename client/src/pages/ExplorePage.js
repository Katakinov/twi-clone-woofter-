import React from "react";
import "./ExplorePage.css"
import Sidebar from "../sidebar/Sidebar";
import Explore from "../explore/Explore"
import WhoFollowWidjets from "../explore/WhoFollowWidjets"

function ExplorePage() {
    return(
        <div className="app">
            <Sidebar/>
            <Explore/>
            <WhoFollowWidjets/>
        </div>
    )
};

export default ExplorePage;