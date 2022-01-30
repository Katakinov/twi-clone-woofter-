import React, { useContext } from "react";
import './Sidebar.css'
import SidebarOption from "../trifle/SidebarOption";
import ProfileBar from "../trifle/ProfileBar.js"
import PetsIcon from '@material-ui/icons/Pets';
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from "@material-ui/core";
import PetsIconClick from "../trifle/Icon";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Sidebar = () => {

    const history = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return(
        <div className="sidebar">
            <a href="/login" onClick={logoutHandler} className="sidebar__twitterIcon">
                <PetsIconClick Icon={PetsIcon} className="sidebar__twitterIcon"/>
            </a>
            <div className="buttonList">
                <NavLink to="/home" className="buttonClass">
                    <SidebarOption Icon={HomeOutlinedIcon} text="Home" />
                </NavLink>
                <NavLink to="/explore" className="buttonClass">
                    <SidebarOption Icon={SearchIcon} text="Explore" />
                </NavLink>
                <NavLink to="/notifications" className="buttonClass">
                    <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                </NavLink>
                <NavLink to="/messages" className="buttonClass">
                    <SidebarOption Icon={MailOutlineIcon} text="Messages" />
                </NavLink>
                <NavLink to="/bookmarks" className="buttonClass">
                    <SidebarOption Icon={BookmarkBorderIcon} text="BookMarks" />
                </NavLink>
                <NavLink to="/lists" className="buttonClass">
                    <SidebarOption Icon={ListAltIcon} text="Lists" />
                </NavLink>
                <NavLink to="/profile" className="buttonClass">
                    <SidebarOption Icon={PermIdentityIcon} text="Profile" />
                </NavLink>
                <NavLink to="/more" className="buttonClass">
                    <SidebarOption Icon={MoreHorizIcon} text="More" />
                </NavLink>
            </div>

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
            <ProfileBar name={"Oleg"} tag={"Katakinov"} url={"https://sun9-45.userapi.com/impg/YB_2xXgEdrSNrY_CIRlIRuRQDdtZ6b-cxnkFKg/1VJ5ExNAqVQ.jpg?size=1080x568&quality=95&sign=452a98a77f57bb3b8cb52a5fd71feac7&type=album"}></ProfileBar>
        </div>
    );
}

export default Sidebar;