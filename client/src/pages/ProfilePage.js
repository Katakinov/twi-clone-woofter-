import React from "react";
import Profile from "../feed/Profile"
import Layout from '../layout/Layout'
import "./ProfilePage.css";

function ProfilePage() {
    return (
        <div className="app">
            <Layout>
                <Profile/>
            </Layout>
        </div>
    );
}

export default ProfilePage;