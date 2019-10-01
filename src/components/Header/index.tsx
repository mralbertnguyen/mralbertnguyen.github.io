import React from 'react';
import styled from 'styled-components';

const StyledContainerHeader = styled.div`
    height : 300px;
    width : 100%;
    background-color : red;
`

export default class Header extends React.Component{
    render(){
        return (
            <StyledContainerHeader>
                <p>Header</p>
            </StyledContainerHeader>
        )
    }
}