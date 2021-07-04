import React from "react";

const LandingPageView = () => {
    return (
        <div id="landing-page-container">
            <section className="left-session">
                left session
            </section>

            <section className="right-session">
                right
                <section className="menu-session">
                    menu
                </section>

                <section className="user-overview-session">
                    user
                </section>

                <div className="float-button-container">
                    float
                </div>
            </section>
        </div>
    );
}

export default LandingPageView;