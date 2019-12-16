import React from 'react'
import styled from 'styled-components'
const SHOPLOGO = require('../../../assets/imgs/shop-logo.png');
const SCShopLogo= styled.img`
    height : 80%;
    width : auto;
    margin: 0px 30px;
`

const ShopLogo = () =>{
    return(
        <SCShopLogo alt="shop-logo" src={SHOPLOGO}/>
    );
}

export default ShopLogo;