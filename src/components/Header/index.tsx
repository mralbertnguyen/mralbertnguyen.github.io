import React from 'react';
import styled from 'styled-components';
import HamburgerButton from '../HambergerButton';
import SocialView from '../SocialView/';
import ContainerLogo from '../../components/Logo';

const StyledContainerHeader = styled.div`
    height : 10%;
    width : 100%;
    background-color : transparent;
    align-items: center;
    display: flex;
    position: fixed;
    // padding : 0px 20px;
    justify-content:space-between;
`

// const StyledContainerBlur = styled.div`
//     background-color : gray;
//     opacity : 0.1;
//     position : absolute;
//     height : 100%;
//     width : 100%;
// `

export default class Header extends React.Component{
    render(){
        return (
            <StyledContainerHeader>
                <HamburgerButton/>
                <ContainerLogo/>
                <SocialView/>
            </StyledContainerHeader>
        )
    }
}