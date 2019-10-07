import React from 'react';
import styled from 'styled-components'

const ImgAvt = require("../../assets/imgs/avt.jpg")

const StyledContainerAvatar = styled.div`
    height : 200px;
    width : 200px;
    background-color :transparent;
    border-radius : 100px;
`
const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    border-radius : 100px;
`

export default class MyAvatar extends React.Component{
    render(){
        return(
            <StyledContainerAvatar>
                <StyledImage src={ImgAvt}/>
            </StyledContainerAvatar>
        )
    }
}