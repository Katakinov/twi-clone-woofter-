import React from "react";
import Layout from '../layout/Layout'
import "./NotificationsPageAll.css";
import NotificationsAll from "../notifications/NotificationsAll"

function NotificationsPageAll() {
    return (
        <div className="app">
            <Layout>
                <NotificationsAll/>
            </Layout>
        </div>
    );
}

export default NotificationsPageAll;