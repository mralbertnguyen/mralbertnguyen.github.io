import React from "react";
import "./style.css";
import menu_data from "../../utils/data/menu.json";
import { MenuDataType } from "../../utils/types/menu.type";
import { Link } from "react-router-dom";

interface Props {
  display: boolean;
}

const MenuItemList: React.FC<MenuDataType> = (item: MenuDataType) => {
  return (
    <div key={item.id} className="container-menu-item-list">
      <Link to={item.path}>
        <p className="txt-title">{item.title}</p>
      </Link>
    </div>
  );
};

const ListMenu: React.FC = () => {
  return (
    <div className="container-list-menu">
      {menu_data.map(i => {
        return MenuItemList(i);
      })}
    </div>
  );
};

const MenuOverlay_Menu: React.FC = () => {
  return (
    <div className="container-menu-overlay">
      <ListMenu />
    </div>
  );
};

export default class MenuOverlay extends React.Component<Props, {}> {
  render() {
    return <>{this.props.display ? <MenuOverlay_Menu /> : null}</>;
  }
}
