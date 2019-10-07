/**
 * Content include avatar and short introduction about myself
 * Using img as background of div
 */

import React from 'react'
import styled from 'styled-components'
import LandingPage from '../../containers/LandingPage';

const StyledImageBackground = styled.div`
    height : 100%;
    width : 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`



export default class Content extends React.Component {
    render() {
        return (
            <StyledImageBackground>
                <LandingPage />
            </StyledImageBackground>
        );
    }
}