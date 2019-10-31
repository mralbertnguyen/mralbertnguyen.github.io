import React, { Component } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import BrImg from "../../../assets/imgs/br-img.jpg";

const SCContainer = styled.div`
  height: 300px;
  width: 400px;
`;

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
          <div>
            <img src={BrImg} />
          </div>
          <div>
            <img src={BrImg} />
          </div>
          <div>
            <img src={BrImg} />
          </div>
          <div>
            <img src={BrImg} />
          </div>
          <div>
            <img src={BrImg} />
          </div>
        </Carousel>
      </SCContainer>
    );
  }
}
