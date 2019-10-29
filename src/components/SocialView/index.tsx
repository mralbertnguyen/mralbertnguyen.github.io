import React from 'react';
import styled from 'styled-components';
import SocialButton from '../SocialButton';

// Path
import {LINK_LINKEDIN, LINK_FACEBOOK} from '../../utils/paths';
//Icons 
const Ic_FB = require("../../assets/icons/ic_facebook.svg");
const Ic_LINKED_IN = require("../../assets/icons/ic_linkedin.svg");

const StyledContainerSocialView = styled.div`
    width : auto;
    height : 100%;
    background-color : transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const socialIconData = [
    {
        key : "ic_fb",
        path: LINK_FACEBOOK,
        iconSrc: Ic_FB,
    },
    {
        key: "ic_linkedin",
        path: LINK_LINKEDIN,
        iconSrc: Ic_LINKED_IN,
    }
]

export default class SocialView extends React.Component {
    render() {
        return (
            <StyledContainerSocialView>
                {
                    socialIconData.map(i => {
                        return <SocialButton key={i.key} iconSrc={i.iconSrc} path={i.path} />
                    })
                }
            </StyledContainerSocialView>
        );
    }
}