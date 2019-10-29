/**
 * Content include avatar and short introduction about myself
 * Using img as background of div
 */

import React from 'react'
import LandingPage from '../../containers/LandingPage';
import "./style.css";

export default class Content extends React.Component {
    render() {
        return (
            <div  className="container-content">
                <LandingPage />
            </div>
        );
    }
}