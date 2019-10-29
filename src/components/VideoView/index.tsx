import React, { Component } from 'react'
import styled from 'styled-components'

const SCContainerVideoView = styled.div`
    height : 600px;
    width : 100%;
    padding : 50px;
    // background-color : red;
`

export default class VideoView extends Component{
    render(){
        return(
            <SCContainerVideoView>
                Video view
            </SCContainerVideoView>
        );
    }
}