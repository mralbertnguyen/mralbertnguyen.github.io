/**
 * Lading page include 
 * Avatar
 * hello title
 * my name
 * short desc
 * link to more information
 */
import React from 'react';
import MyAvatar from '../../components/Avatar';
import styled from 'styled-components';
import data from "../../utils/data/personal.json";

const StyledContainerLandingPage = styled.div`
    background-color : transparent;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index : 1;
`

const StyledHelloTitle = styled.p`
    font-size : 14pt;
    margin-top : 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 20px;
    color: gray;
    font-size: 14pt;
`
const StyledName = styled.p`
    font-size : 14pt;
    align-items: center;
    justify-content: center;
    display: flex;
    color: black;
    font-weight: bold;
    font-size: 40pt;
    margin-bottom: 10px;

`

const StyledDesc = styled.p`
    font-size : 14pt;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 12pt;
    color :gray
`

export default class LandingPage extends React.Component{
    render(){
        return(
            <StyledContainerLandingPage>
                <MyAvatar/>
                <StyledHelloTitle>{data.title}</StyledHelloTitle>
                <StyledName>{data.name}</StyledName>
                <StyledDesc>{data.desc}</StyledDesc>
            </StyledContainerLandingPage>
        );
    }
}