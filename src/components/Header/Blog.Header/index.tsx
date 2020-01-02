import React, { Component } from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import signature from "../../../assets/imgs/signature.png";
import MenuHeader from "../../Menu/BlogMenu/";
import SocialView from "../../SocialView";

const SCImg = styled.img`
  height: auto;
  width: 100%;
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
        {/* Menu */}
        <Col md={4} xs={4}>
          <MenuHeader />
        </Col>
        {/* Logo */}
        <Col md={6} xs={6}>
          <SCImg alt="signature" src={signature} />
        </Col>
        {/* Social View */}
        <Col md={14} xs={14}>
          <SocialView />
        </Col>
      </SCRow>
    );
  }
}
