import React from "react";
import { Routes, Route, Navigate} from "react-router-dom";
import { AuthPages } from "./pages/AuthPages";
import ExplorePage from './pages/ExplorePage';
import HomePage from './pages/HomePage';
import NotificationsPageAll from './pages/NotificationsPageAll';
import NotificationsPageMentions from "./pages/NotificationsPageMentions";
import ProfilePage from './pages/ProfilePage';
//import RegPages from "./pages/RegPages";

export const useRoutesCustom = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Routes>
                <Route path="/" exact element={<HomePage/>}/>
                <Route path="/home" exact element={<HomePage/>}/>
                <Route path="/profile" exact element={<ProfilePage/>}/>
                <Route path="/login" exact element={<AuthPages/>}/>
                <Route path="/notifications" exact element={<NotificationsPageAll/>}/>
                <Route path="/notifications/all" exact element={<NotificationsPageAll/>}/>
                <Route path="/notifications/mentions" exact element={<NotificationsPageMentions/>}/>
                <Route path="/explore" exact element={<ExplorePage/>}/>
                <Route path="*" exact element={<Navigate replace to="/"/>} />
            </Routes>
            //<Route path="/register" exact element={<RegPages/>}/>
        );
    }
    else{
        return(
            //нужно сделать роут заглушку для "/profile", чтобы выводилась страница, которая умеет посылать на)
            <Routes>
                <Route path="/" exact element={<AuthPages/>}/>
                <Route path="/login" exact element={<AuthPages/>}/>
                <Route path="*" exact element={<Navigate replace to="/"/>} />
            </Routes>
            //<Route path="/Profile" exact element={<AuthPages/>}/>
            //<Route path="/register" exact element={<RegPages/>}/>
            //<Route path="/main" exact element={<MainPages/>}/>
            //<Route path="/stations" exact element={<StationsPages/>}/>
            //<Route path="/calendar" exact element={<CalendarPages/>}/>
            //<Route path="/aboutdonation" exact element={<AboutDonationPages/>}/>
        );
    }
}