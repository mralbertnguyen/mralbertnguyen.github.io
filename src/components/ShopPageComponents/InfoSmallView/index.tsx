import React from 'react'
import styled from 'styled-components'
import SocialViewS from '../../ShopPageComponents/SocialView'

const SCHeaderSmall = styled.div`
    width : 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 50px;
    justify-content : space-between;
    background-color : black;
`

const SCViewListItem = styled.div`
    flex-direction: row;
    display: flex;
`

const SCItemViewContainer = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    margin: 0px 5px;
`

const SCItemIcon = styled.i`
    color : gray;
    height : 10px;
    width : auto;
    margin: 0px;
    margin: 0px 5px;
`

const SCItemLbl = styled.p`
font-size: 0.8em;
    color : gray;
    margin: 0px 5px;
    
`
const SCItemValue = styled.p`
    font-size: 0.8em;
    color : white;
    margin: 0px;
    margin: 0px 5px;
`


interface Props {

}

interface InfoItemType {
    id: string;
    icon: string;
    label: string;
    value: string;
}

const dataInfo: InfoItemType[] = [
    {
        id: "address",
        label: "Address",
        value: "Ho Chi Minh city",
        icon: "fas fa-map-marker-alt"
    },
    {
        id: "email",
        label: "Email",
        value: "ndttam.dev@gmail.com",
        icon: "fas fa-envelope-open-text"
    },
    {
        id: "phone",
        label: "Phone",
        value: "0909090909090",
        icon: "fas fa-phone-volume"
    }
] as InfoItemType[];

const InfoItemView : React.FC<InfoItemType> = (props: InfoItemType) =>{
    return (
        <SCItemViewContainer>
            {/* <SCItemIcon alt={props.id} src={`url(${props.icon})`} /> */}
            <SCItemIcon className={props.icon}/>
            <SCItemLbl>{props.label}</SCItemLbl>
            <SCItemValue>{props.value}</SCItemValue>
        </SCItemViewContainer>
    )
}

const InfoList = ()=> {
    return(
       <SCViewListItem> {
        dataInfo.map((item: InfoItemType) => {
            return <InfoItemView key={item.id} id={item.id} icon={item.icon} label={item.label} value={item.value}/>
        })}
    </SCViewListItem>
    )
}

const InfoSmallView : React.FC= ()=> {
    return (
        <>
            <SCHeaderSmall>
                <InfoList/>
                 <SocialViewS/>
            </SCHeaderSmall>
        </>
    )
}

export default InfoSmallView;