import React from 'react'
import styled from 'styled-components'
const ImageBr = require('../../assets/imgs/br-header.jpg');
const StyledContainerContent = styled.div`
    height : 100%;
    width : 100%;
    background-color : pink;
    
`
const StyledImageBackground = styled.img`
    height : 100%;
    width : 100%;
`

export default class Content extends React.Component{
    render(){
        return(
            <StyledContainerContent>
                {/* Image as background */}
                <StyledImageBackground src={ImageBr}/>
            </StyledContainerContent>
        );
    }
}