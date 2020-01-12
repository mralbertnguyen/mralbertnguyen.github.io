import { Row } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import ShortResume from '../components/ShortResume';
import MenuOverlay from '../containers/MenuOverlay';
import "./style.css";

interface States {
    displayMenu: boolean,
    toggle: boolean,
    colorBugger: string,
    lblButtonViewMore: string,
    headerTitle: string
}

interface Props {

}

const SCRow = styled(Row)`
    position : absolute !important;
    bottom : 0px;
    height: 100% !important;
    width: 100% ;
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
            colorBugger: 'black',
            lblButtonViewMore: 'view more',
            headerTitle: ''
        }
    }

    componentDidMount() {
        this.setState({
            headerTitle: process.env.REACT_APP_TITLE || "Header TItle"
        });
    }

    handleClickMenuButton = () => {
        this.setState({
            toggle: !this.state.toggle,
            displayMenu: !this.state.displayMenu,
            colorBugger: !this.state.toggle ? 'white' : 'black'
        });
        console.log(`Toggle : ${this.state.toggle} \n Display Menu : ${this.state.displayMenu}`)
        console.log("Pressed button");
    }

    render() {
        const { headerTitle } = this.state;
        return (
            <div className="container-layout">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{headerTitle}</title>
                </Helmet>
                <div className="container-blur-effect" />
                <Header colorBugger={this.state.colorBugger} toggle={this.state.toggle} onClickMenuButton={this.handleClickMenuButton} />
                <MenuOverlay display={this.state.displayMenu} />
                <SCRow>
                    <ShortResume />
                    <SCContainerButton>
                        <SCButtonViewMore>
                            <p>{this.state.lblButtonViewMore.toLowerCase()}</p>
                        </SCButtonViewMore>
                    </SCContainerButton>
                </SCRow>
            </div>
        )
    }
}