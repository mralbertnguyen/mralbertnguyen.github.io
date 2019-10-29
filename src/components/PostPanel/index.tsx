import React, { Component } from "react";
import styled from "styled-components";

import dataBlog from "../../utils/data/blog.menu.json";
import dataPost from "../../utils/data/mock/post.mock.data.json";

import {
  BlogDataType,
  TabMenuType,
  PostItemCardDataType
} from "../../utils/types/data.type";
import {Row, Col } from "antd";
import ItemCardPostPanel from "./ItemCard.PostPanel";

const data: BlogDataType[] = dataBlog as BlogDataType[] | [];
const tab_data = data[0].tab_menu as TabMenuType[] | [];
const dataP: PostItemCardDataType[] = dataPost as PostItemCardDataType[] | [];
const SCContainerPPanel = styled.div`
  width: 100%;
  // background-color: green;
  padding: 50px;
  max-height: 500px;
  overflow-y: scroll;
`;

const SCHeaderTab = styled.div`
  height: 100px;
  width: 100%;
  // background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SCTitleTabHeader = styled.div`
  height: 100%;
  width: 50%;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: black;
  font-weight: bold;
  border-width : 1px;
  border-color :black;
  margin: 10px;
`;
const SCContentTab = styled.div`
  // height : 500px;
  width: 100%;
  // background-color: pink;
  padding: 50px;
`;

const SCColItem = styled(Col)`
display: flex !important;
     justify-content: center;
    align-items: center;
    padding : 10px;
    `

const ContentTab: React.FC = () => {
  return (
    <SCContentTab>
      <Row>
        {dataP.map((i: PostItemCardDataType) => {
          return <SCColItem key={i.id} span={8}>
            <ItemCardPostPanel
              id={i.id}
              titleCard={i.title}
              alt={i.alt}
              srcBR={i.srcBR}
              descCard={i.desc}
            />
          </SCColItem>;
        })}
      </Row>
    </SCContentTab>
  );
};

const HeaderTab: React.FC = () => {
  return (
    <SCHeaderTab>
      <SCTitleTabHeader onClick={()=>{
          console.log("Press on tab 1")
      }}>{tab_data[0].name}</SCTitleTabHeader>
      <SCTitleTabHeader>{tab_data[1].name}</SCTitleTabHeader>
    </SCHeaderTab>
  );
};

export default class PostPanel extends Component {
  render() {
    console.table(data);
    return (
      <SCContainerPPanel>
        <HeaderTab />
        <ContentTab />
      </SCContainerPPanel>
    );
  }
}
