import React from "react";
import styled , {keyframes} from "styled-components";
import personalData from "../../data/personal.json";
import BlogHeader from "../../components/Header/Blog.Header";
import BrImg from "../../assets/imgs/br-img.jpg";
import ImgCloudy from "../../assets/imgs/cloud.png";
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
  position :absolute;
`;



const SCTitle = styled.p`
  color : white;
  font-size : 40pt;
  text-align: center;
  font-weight : bold;
  align-self : center;
  margin-bottom : 200px;
`

export default class BlogPage extends React.Component {
  render() {
    return (
      <StyledContainerBlog id="container-blog">
        <BlogHeader />

        <SCWithBr>
          <SCTitle>{personalData.title_header_blog.toUpperCase()}</SCTitle>
        </SCWithBr>

        
      </StyledContainerBlog>
    );
  }
}
