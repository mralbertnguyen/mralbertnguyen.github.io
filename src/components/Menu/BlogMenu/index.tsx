import React from 'react';
import styled from 'styled-components';

const StyledContainerMenuBlog = styled.div`
    height : 100px;
    width :600px;
    background-color : pink;
`

export default class BlogMenu extends React.Component{
    render(){
        return(
            <StyledContainerMenuBlog>
                Header
            </StyledContainerMenuBlog>
        );
    }
}