import React, { useContext } from "react";
import "./NavBar.css";
import {NavLink, useNavigate } from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';
import { AuthContext } from "../context/AuthContext";
//import {Avatar, Button} from "@material-ui/core";

const NavBar = () => {
    const history = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <div className="navBarPages">
            <img src="https://gbuzspk.ru/images/news/2021/03/16/pelikan/pelikan_001.jpg" className="donorIcon" alt="symbol"/>
            <div className="navBarButtons">
                <NavLink to="/main" className="buttonClass">
                    <h1>Главная</h1>
                </NavLink>
                <NavLink to="/profile" className="buttonClass">
                    <h1>Личный кабинет</h1>
                </NavLink>
                <NavLink to="/stations" className="buttonClass">
                    <h1>Станции</h1>
                </NavLink>
                <NavLink to="/calendar" className="buttonClass">
                    <h1>Календарь донора</h1>
                </NavLink>
                <NavLink to="/aboutdonation" className="buttonClass">
                    <h1>О донорстве</h1>
                </NavLink>
                <a href="/" onClick={logoutHandler} className="iconButtonClass">
                    <PetsIcon/>
                </a>
            </div>
        </div>
    )
}

export default NavBar;