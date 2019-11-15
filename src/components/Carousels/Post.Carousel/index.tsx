import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import BrImg from "../../../assets/imgs/br-img.jpg";

const SCContainer = styled.div`
  height: 300px;
  width: 400px;
`;

const dataCarousel = [
  {
    "id" : "img1",
    "alt" : "img1",
    "src" : BrImg
  },
  {
    "id" : "img2",
    "alt" : "img2",
    "src" : BrImg
  },
  {
    "id" : "img3",
    "alt" : "img3",
    "src" : BrImg
  },
  {
    "id" : "img4",
    "alt" : "img4",
    "src" : BrImg
  },
  {
    "id" : "img5",
    "alt" : "img5",
    "src" : BrImg
  }
]

export default class CarouselPost extends Component {
  render() {
    return (
      <SCContainer>
        <Carousel
          showArrows={true}
          onChange={() => {}}
          onClickItem={() => {}}
          onClickThumb={() => {}}
          showStatus={false}
          showThumbs={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          {
            dataCarousel.map((item)=>{
              return(
              <div id={item.id}>
                <img alt={item.alt} src={item.src} />
              </div>
              );
            })
          }
        </Carousel>
      </SCContainer>
    );
  }
}
