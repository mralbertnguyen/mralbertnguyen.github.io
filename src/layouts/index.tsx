import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import StyledContainerContent from '../components/Contents';

const StyledContainerLayout = styled.div`
    position : absolute;
    top : 0;
    bottom : 0;
    height : 100%;
    width : 100%;
    background-color : gray;
`

export default class AppLayout extends React.Component {
    render(){
        return(
            <StyledContainerLayout>
                <Header/>
                <StyledContainerContent/>
            </StyledContainerLayout>
        )
    }
}