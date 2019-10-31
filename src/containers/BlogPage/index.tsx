import React from "react";
import styled , {keyframes} from "styled-components";

import personalData from "../../utils/data/personal.json";
import BlogMenu from "../../components/Menu/BlogMenu";
import BlogHeader from "../../components/Header/Blog.Header";
import BrImg from "../../assets/imgs/br-img.jpg";
import ImgCloudy from "../../assets/imgs/cloud.png";
import CarouselPost from "../../components/Carousels/Post.Carousel";
import {Row, Col} from 'antd';
const StyledContainerBlog = styled.div`
  flex-wrap: nowrap;
  padding: 0px;
  margin : 0px;
`;

const SCWithBr = styled.div`
  background-image: url(${BrImg});
  height: 100%;
  width: 100%;
  background-repeat: none-repeat;
  background-size: 100% 100%;
  display : flex;
  justify-content : center;
  algin-items : center;
  flex-direction: column;
    align-items: center;
    position :absolute
`;

const animate = keyframes`
  0%
  {
    background-position : 0px;
  }
  10%
  {
    background-position : 1280px
  }
`
const SCCloudyAnim = styled.div`
  background-image: url(${ImgCloudy});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 43.75em;
  animation : ${animate} 80s linear infinite;
`

const SCTitle = styled.p`
  color : white;
  font-size : 40pt;
  text-align: center;
  font-weight : bold;
  align-self : center;
  margin-bottom : 200px;
`

const SCViewShowGallery = styled.div`
  position : absolute;
  left : 10px;
  bottom : 10px;
`

export default class BlogPage extends React.Component {
  render() {
    return (
      <StyledContainerBlog id="container-blog">
        <BlogHeader />

        <SCWithBr>
          <SCCloudyAnim/>
          <SCTitle>{personalData.title_header_blog.toUpperCase()}</SCTitle>
        </SCWithBr>

        <SCViewShowGallery>
          <CarouselPost/>
        </SCViewShowGallery>
      </StyledContainerBlog>
    );
  }
}
