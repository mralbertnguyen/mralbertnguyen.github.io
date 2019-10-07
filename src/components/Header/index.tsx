import React from 'react';
import styled from 'styled-components';
import HamburgerButton from '../HambergerButton';
import SocialView from '../SocialView/';

const StyledContainerHeader = styled.div`
    height : 10%;
    width : 100%;
    background-color : transparent;
    align-items: center;
    display: flex;
    position: fixed;
    padding : 0px 5%;
    justify-content:space-between;
    z-index: 1;

`

interface Props {
    toggle: boolean,
    onClickMenuButton : Function
}

export default class Header extends React.Component<Props,{}>{
    render() {
        return (
            <StyledContainerHeader>
                <HamburgerButton toggle={this.props.toggle} onClick={this.props.onClickMenuButton.bind(this)} />
                <SocialView />
            </StyledContainerHeader>
        )
    }
}