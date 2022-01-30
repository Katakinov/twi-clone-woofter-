import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Widgets from "../widgets/Widgets";
import "./Layout.css";
/*import HomePage from "../Pages/HomePage";
import ProfilePage from "../Pages/ProfilePage";
import Home from "../feed/Home"
import Profile from "../feed/Profile"
import profileItems from "../array/ProfileItems";*/

function Layout(props) {
    return(
        <div className="app">
            <Sidebar/>
            {props.children}
            <Widgets/>
        </div>
    );
}

export default Layout;