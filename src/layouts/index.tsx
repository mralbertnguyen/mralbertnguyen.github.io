import React from 'react';
import Header from '../components/Header';
import Content from '../components/Contents';
import MenuOverlay from '../containers/MenuOverlay';
import "./style.css";

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
        console.log(`Toggle : ${this.state.toggle} \n Display Menu : ${this.state.displayMenu}`)
        console.log("Pressed button");
    }

    render() {
        return (
            <div className="container-layout">
                <div className="container-blur-effect" />
                <Header toggle={this.state.toggle} onClickMenuButton={this.handleClickMenuButton} />
                <MenuOverlay display={this.state.displayMenu} />
                <Content />
            </div>
        )
    }
}