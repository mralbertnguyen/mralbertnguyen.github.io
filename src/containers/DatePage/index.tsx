import React from 'react';
import styled from 'styled-components';

const SCContainer = styled.div`
    backgrounnd-color: yellow;
`
const SCLeftCol = styled.div`
    background-color: green;
`

const SCRightCol = styled.div`
    background-color : pink;
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
