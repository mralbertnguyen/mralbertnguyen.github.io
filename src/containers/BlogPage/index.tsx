import React from "react";
import styled from "styled-components";
import BlogMenu from "../../components/Menu/BlogMenu";
import personalData from "../../utils/data/personal.json";
import PostPanel from "../../components/PostPanel";
import VideoView from "../../components/VideoView";
const StyledContainerBlog = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
  position : relative;
  flex-direction : column
`;
const SCBlogHeader = styled.div`
  height: 300px;
  width: 100%;
  align-items: center;
  display: flex;
  background-image: url(https://wallpaperaccess.com/full/645029.jpg);
  background-size: cover;
  flex-direction: column;
`;
const SCBlogContent = styled.div`
  width: 100%;
  position: relative;
`;

const SCBlogHeaderTitle = styled.p`
  font-size: 30px;
  color: white;
  margin: 0;
  position : relative;
`;

const SCBlogDescHeaderTitle = styled.p`
  font-size: 20px;
  color: white;
  margin: 0;
`;

export default class BlogPage extends React.Component {
  render() {
    return (
      <StyledContainerBlog>
        
        <SCBlogHeader>
          <BlogMenu />
          <SCBlogHeaderTitle>
            {personalData.title_header_blog}
          </SCBlogHeaderTitle>
          <SCBlogDescHeaderTitle>
            {personalData.desc_header_blog}
          </SCBlogDescHeaderTitle>
        </SCBlogHeader>

        <SCBlogContent>
          <PostPanel />
          <VideoView/>
        </SCBlogContent>

      </StyledContainerBlog>
    );
  }
}
