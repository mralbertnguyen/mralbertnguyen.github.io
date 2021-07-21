import React from "react";
import ProjectGallery from "../../components/project_gallery/ProjectGallery";
import UserCard from "../../components/user_card/UserCard";
import "./LandingPageView.scss";

const LandingPageView = () => {
    return (
        <div id="landing-page-container">
            <section className="left-session">
                left session
                <UserCard />

                <ProjectGallery />
            </section>

            {/* TODO: Drawer Menu ....  */}
            <section className="right-session">
                <div id="menu-session">
                    menu
                </div>

                <div className="user-overview-session">
                    user
                </div>

            </section>

            <div className="float-button-container">
                float
            </div>
        </div>
    );
}

export default LandingPageView;