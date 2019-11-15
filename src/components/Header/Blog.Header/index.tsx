import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import signature from "../../../assets/imgs/signature.png";
import MenuHeader from "../../Menu/BlogMenu/";
import SocialView from "../../SocialView";

const SCImg = styled.img`
  height: 80px;
  width: auto;
`;

const SCRow = styled(Row)`
    display: flex !important;
    position: fixed !important;
    flex-direction: row !important;
    justify-content: center !important;
    align-items: center !important;
    padding : 0px 2% !important;
    height : 100px !important;
    width : 100% !important;
    z-index : 11;
`

export default class BlogHeader extends Component {
  render() {
    return (
      <SCRow>
        {/* Logo */}
        <Col md={6}>
          <SCImg alt="signature" src={signature} />
        </Col>

        {/* Social View */}
        <Col md={14}>
          <SocialView/>
        </Col>

        {/* Menu */}
        <Col md={4}>
          <MenuHeader/>
        </Col>
      </SCRow>
    );
  }
}
