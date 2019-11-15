import React from 'react';
import Header from '../components/Header';
import MenuOverlay from '../containers/MenuOverlay';
import {Row, Col} from 'antd';
import AboutMeContent from '../containers/Contents/AboutMe';

import styled from 'styled-components';
import "./style.css";

interface States {
    displayMenu: boolean,
    toggle: boolean,
    colorBugger : string
}

interface Props {

}

const SCRow = styled(Row)`
    position : absolute !important;
    bottom : 0px;
    height: 100% !important;
    width: 100% !important;
`

const SCColLeft = styled(Col)`
    background-color : aqua;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100% !important;
`

export default class AppLayout extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            displayMenu: false,
            toggle: false,
            colorBugger : 'black'
        }
    }


    handleClickMenuButton = () => {
        this.setState({
            toggle: !this.state.toggle,
            displayMenu: !this.state.displayMenu,
            colorBugger : !this.state.toggle ? 'white' : 'black'
        });
        console.log(`Toggle : ${this.state.toggle} \n Display Menu : ${this.state.displayMenu}`)
        console.log("Pressed button");
    }

    render() {
        return (
            <div className="container-layout">
                <div className="container-blur-effect" />
                <Header colorBugger={this.state.colorBugger} toggle={this.state.toggle} onClickMenuButton={this.handleClickMenuButton} />
                <MenuOverlay display={this.state.displayMenu} />
                <SCRow>
                    <SCColLeft md={8}>
                        <AboutMeContent/>
                    </SCColLeft>

                    <SCColLeft md={16}>
                        {/* <CVView/> */}
                    </SCColLeft>
                </SCRow>
            </div>
        )
    }
}