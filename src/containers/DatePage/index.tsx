import React from 'react';
import styled from 'styled-components';

const SCContainer = styled.div`
    backgrounnd-color: yellow;
    display: flex;
    flex-direction : row;
    min-height : 100vh;
    width : 100%;
`
const SCLeftCol = styled.div`
    background-color: green;
    width : 70%;
`

const SCRightCol = styled.div`
    background-color : pink;
    width : 30%;

`


export default class DatePage extends React.Component{
    render(){
        return(
            <SCContainer>
                <SCLeftCol>Left</SCLeftCol>
                <SCRightCol>Right</SCRightCol>
            </SCContainer>
        )
    }
}
