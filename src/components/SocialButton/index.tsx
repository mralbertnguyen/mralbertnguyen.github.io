import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

interface SocialProps {
    iconSrc: string,
    path: string
}

const StyledButton = styled(Button)`
    height : 50px !important;
    width : 50px !important;
    padding : 0px !important;
    background-color: transparent !important;
    margin : 0px 5px 0px 5px !important;
    border : 0px !important;
`

const StyledIcon = styled.img`
    height : 40px !important;
    width : 40px !important;
`

const SocialButton: React.FC<SocialProps> = (props) => {
    return (
        <a href={props.path} target="_blank" rel="noopener noreferrer">
            <StyledButton>
                <StyledIcon  src={props.iconSrc} />
            </StyledButton>
        </a>
    )
}

export default SocialButton;