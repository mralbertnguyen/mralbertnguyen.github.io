import React from 'react';
import styled from 'styled-components';


interface SocialType {
    id: string,
    name: string,
    icon: string,
    link : string
}

const dataSocialView: SocialType[] = [
    {
        "id": "fb",
        "name": "Facebook",
        "icon": "fab fa-facebook-f",
        "link" : "#",
    },
    {
        "id": "tw",
        "name": "Twitter",
        "icon": "fab fa-twitter",
        "link" : "#",
    },
    {
        "id": "g+",
        "name": "Google+",
        "icon": "fab fa-google-plus-g",
        "link" : "#"
    },
    {
        "id": "insta",
        "name": "Instagram",
        "icon": "fab fa-instagram",
        "link" : "#"
    },
    {
        "id": "yt",
        "name": "Youtube",
        "icon": "fab fa-youtube",
        "link" : "#",
    },

]


const SCSocialViews = styled.div`
    margin 0px 10px;
`

const SCIcon = styled.i`
    font-size : 1em;
    color : white;
`
const SCSocialContainer = styled.div`
    height : 100%;
    width : 30%;
    display : flex;
    flex-direction : row;
    justify-content: flex-end;
`
const SocialViewIcon = (props: SocialType) => {
    return (
        <SCSocialViews>
            <SCIcon className={props.icon} />
        </SCSocialViews>
    )
}


const SocialViewS = () => {
    return <SCSocialContainer>
        {
            dataSocialView.map((i: SocialType) => {
                return <SocialViewIcon key={i.id} id={i.id} icon={i.icon} name={i.name} link={i.link}/>
            })
        }
    </SCSocialContainer>
}

export default SocialViewS;