import React from "react";
import Layout from "../layout/Layout";
import "./NotificationsPageMentions.css";
//import NotificationsAll from "../notifications/NotificationsAll"
import NotificationsMentions from "../notifications/NotificationsMentions";

function NotificationsPageMentions() {
    return (
        <div className="app">
            <Layout>
                <NotificationsMentions/>
            </Layout>
        </div>
    );
}

export default NotificationsPageMentions;