import React from 'react'
import styled from 'styled-components'
import ShopMenuItems from '../ShopMenuItems'
const SCShopMenuContainer = styled.div`
    height : 80%;
    width : 600px;
    background-color : green;
    display: flex;
    flex-direction : row;
    justify-content: center;
`



export default class ShopMenu extends React.Component{
    render(){
        return(
            <SCShopMenuContainer>
                <ShopMenuItems/>
            </SCShopMenuContainer>
        )
    }
}