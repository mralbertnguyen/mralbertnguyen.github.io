import React from 'react'
import styled from 'styled-components'

const StyledContainerLogo = styled.div`
    height : 100%;
    width : 10%;
    background-color : transparent;
    display : flex;
    justify-content : center;
    align-items : center
`


export default class ContainerLogo extends React.Component{
    render(){
        return (
            <StyledContainerLogo>
                Logo
            </StyledContainerLogo>
        )
    }
}