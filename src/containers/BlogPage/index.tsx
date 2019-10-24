import React from 'react';
import styled from 'styled-components';
import BlogMenu from '../../components/Menu/BlogMenu';
const StyledContainerBlog = styled.div`
    height : 100%;
    width : 100%;
    background-color : blue;
    display: 
`

export default class BlogPage extends React.Component{
    render(){
        return(
            <StyledContainerBlog>
                <BlogMenu/>>
            </StyledContainerBlog>
        );
    }
}