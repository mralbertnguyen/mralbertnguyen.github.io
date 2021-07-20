import React from "react";
import "./LandingPageView.scss";

const LandingPageView = () => {
    return (
        <div id="landing-page-container">
            <section className="left-session">
                left session

                {/* TODO: Drawer Menu ....  */}
            </section>

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