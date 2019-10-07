import React from 'react';
import styled from "styled-components";
import Header from '../components/Header';
import Content from '../components/Contents';
import MenuOverlay from '../containers/MenuOverlay';

const ImageBr = require('../assets/imgs/br-img.jpg');

const StyledContainerLayout = styled.div`
    position : absolute;
    top : 0;
    bottom : 0;
    height : 100%;
    width : 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-image : url(${ImageBr});
`

const StyledContainerBlur = styled.div`
    height : 100%;
    width : 100%;
    background-color : white;
    opacity : 0.8;
    position : absolute;
    top : 0px;
    left : 0px;
    z-index: 0
`

interface States {
    displayMenu: boolean,
    toggle: boolean
}

interface Props {

}

export default class AppLayout extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props);

        this.state = {
            displayMenu: false,
            toggle: false
        }
    }

    handleClickMenuButton = () => {
        this.setState({
            toggle: !this.state.toggle,
            displayMenu: !this.state.displayMenu
        });

        console.log("Pressed button");
    }

    render() {
        return (
            <StyledContainerLayout>
                <StyledContainerBlur />
                <Header toggle={this.state.toggle} onClickMenuButton={this.handleClickMenuButton} />
                <Content />
                <MenuOverlay display={this.state.displayMenu} />
            </StyledContainerLayout>
        )
    }
}