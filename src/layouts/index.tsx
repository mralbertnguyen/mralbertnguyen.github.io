import React from 'react';
import Header from '../components/Header';
import MenuOverlay from '../containers/MenuOverlay';
import {Row} from 'antd';
import ShortResume from '../components/ShortResume'
import styled from 'styled-components';
import "./style.css";

interface States {
    displayMenu: boolean,
    toggle: boolean,
    colorBugger : string,
    lblButtonViewMore : string
}

interface Props {

}

const SCRow = styled(Row)`
    position : absolute !important;
    bottom : 0px;
    height: 100% !important;
    width: 100% !important;
    padding-top: 10%;
`

const SCContainerButton = styled.div`
    height : 100px;
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
`

const SCButtonViewMore = styled.button`
    background-color : black;
    height: 40%;
    width: 100px;
    font-size: 12px;
    display : flex;
    justify-content: center;
    border: none;
    outline: transparent;
    color: white;
`

export default class AppLayout extends React.Component<Props, States> {

    constructor(props: Props) {
        super(props);
        this.state = {
            displayMenu: false,
            toggle: false,
            colorBugger : 'black',
            lblButtonViewMore : 'view more'
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
                    <ShortResume/>
                    <SCContainerButton>
                        <SCButtonViewMore>
                            {this.state.lblButtonViewMore.toLowerCase()}
                        </SCButtonViewMore>
                    </SCContainerButton>
                </SCRow>
            </div>
        )
    }
}