import React from 'react';
import styled from 'styled-components';
import menuData from '../../../utils/data/blog.menu.json';
const SCMenuBlog = styled.div`
    height : 100px;
    width :600px;
    background-color : pink;
    display : flex;
    align-items:center;
    flex-direction: row;
    justify-content: center;
    align-self: center;

`

const SCMenuBlogItem = styled.div`
    height : 80%;
    width : 180px;
    display: flex;
    justify-content : center;
    align-items : center;
    background-color : green;
    margin : 10px;
`

const SCItemContent = styled.p`
    color : white;
    font-size : 12px;
    margin: 0px;
`


interface Props {
    content : string
}

class BlogMenuItem extends React.Component<Props,{}>{
    render(){
        return(
            <SCMenuBlogItem>
                <SCItemContent>{this.props.content}</SCItemContent>
            </SCMenuBlogItem>
        )
    }
}

export default class BlogMenu extends React.Component{
    render(){
        return(
            <SCMenuBlog>
                {
                    menuData.map(item => {
                        return <BlogMenuItem key={item.id} content={item.name}/>
                    })
                }
            </SCMenuBlog>
        );
    }
}