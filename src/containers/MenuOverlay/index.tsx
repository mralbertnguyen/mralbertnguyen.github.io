import React from "react";
import "./style.css";
import menu_data from "../../data/menu.json";
import { MenuDataType } from "../../utils/types/menu.type";
import { Link } from "react-router-dom";
import styled from 'styled-components';

interface Props {
  display: boolean;
}

const SCNoti = styled.p`
  text-align: center;
  font-size : 30px;
  color: white;
  font-weight: bold;

`

const FeatureComingSoon = () => {
  let txt = "Feature disabled";
  return <SCNoti>{txt.toUpperCase()}</SCNoti>
}
function MenuItemList(item: MenuDataType) {
  return (
    <div key={item.id} className="container-menu-item-list">
      <Link to={item.path}>
        <p className="txt-title">{item.title}</p>
      </Link>
    </div>
  );
};

function ListMenu() {
  return (
    <div className="container-list-menu">
      {menu_data.map(i => {
        return MenuItemList(i);
      })}
    </div>
  );
};

function FeatureFlag() {
  let isEnabled = process.env.REACT_APP_ENABLE_BLOG;
  return (isEnabled) ? <ListMenu /> : <FeatureComingSoon />;
}

function MenuOverlay(props: Props) {
  console.log(process.env.REACT_APP_ENABLE_BLOG);
  return (
    props.display ? <div className="container-menu-overlay">
      <FeatureFlag />
    </div> : null
  );
}

export default MenuOverlay;
