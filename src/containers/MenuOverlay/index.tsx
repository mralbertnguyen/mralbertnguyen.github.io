import React from 'react'
import "./style.css";

interface States {}

interface Props {
    display: boolean
}


const MenuOverlay_Menu : React.FC = () => {
    return(
        <div className="menu-overlay-menu">

        </div>
    )
}

export default class MenuOverlay extends React.Component<Props, States>{
    componentDidUpdate(){
        console.log(`MenuOverlay - componentDidUpdate ${this.props.display}`);
    }
    render() {
        return (
            (this.props.display) ?
                <div className="container-menu-overlay">
                    Menu Over lay
                </div> : null
        )
    }
}