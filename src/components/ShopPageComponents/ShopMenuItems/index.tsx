import React from 'react'
import styled from 'styled-components'


interface ShopMenuItemType {
    id: string,
    name: string,
    link: string
}

const dataShopMenu: ShopMenuItemType[] = [
    {
        "id": "1",
        "name": "Home",
        "link": "#",
    },
    {
        "id": "2",
        "name": "Catalog",
        "link": "#",
    },
    {
        "id": "3",
        "name": "Element",
        "link": "#",
    },
    {
        "id": "4",
        "name": "Contact",
        "link": "#"
    }
]

const SCMenuItemContainer = styled.div`
    background-color : red;
    display : flex;
    justify-content : center;
    align-items : center
    padding: 0 20px;
    width : 20%
`
const SCLinkMenuItem = styled.a`
font-size : 1.5em;
color : white;
`

const ShopMenuItem = (props: ShopMenuItemType) => {
    return (
        <SCMenuItemContainer>
            <SCLinkMenuItem href={props.link}>{props.name}</SCLinkMenuItem>
        </SCMenuItemContainer>
    );
}

export default class ShopMenuItems extends React.Component {

    render() {
        return (
            <>
                {
                    dataShopMenu.map((i: ShopMenuItemType) => {
                        return <ShopMenuItem id={i.id} link={i.link} name={i.name} />
                    })
                }
            </>
        )
    }
}