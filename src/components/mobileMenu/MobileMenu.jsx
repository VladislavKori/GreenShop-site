import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./mobilemenu.css";

import { ReactComponent as HomeIcon } from "../../assets/mobilemenu/home.svg";
import { ReactComponent as HeartIcon } from "../../assets/mobilemenu/heart.svg";
import { ReactComponent as MainIcon } from "../../assets/mobilemenu/main.svg";
import { ReactComponent as BasketIcon } from "../../assets/mobilemenu/basket.svg";
import { ReactComponent as UserIcon } from "../../assets/mobilemenu/user.svg";

function MobileMenu() {
  return (
    <div className="mobilemenu">
      <ul className="mobilemenu__list">
        <NavLink
          exact
          className="mobilemenu__item"
          to={"/"}
          activeClassName="mobilemenu__item_active"
        >
          <HomeIcon className="mobilemenu__icon" />
        </NavLink>
        <NavLink
          exact
          className="mobilemenu__item"
          to={"/shops"}
          activeClassName="mobilemenu__item_active"
        >
          <HeartIcon className="mobilemenu__icon" />
        </NavLink>
        <li className="mobilemenu__item_scan">
          <div className="mobilemenu__item_scan-inner">
            <MainIcon className="mobilemenu__icon" />
          </div>
        </li>
        <NavLink
          exact
          className="mobilemenu__item"
          to={"/basket"}
          activeClassName="mobilemenu__item_active"
        >
          <BasketIcon className="mobilemenu__icon" />
        </NavLink>
        <NavLink
          exact
          className="mobilemenu__item"
          to={"/user/settings/accountdetail"}
          activeClassName="mobilemenu__item_active"
        >
          <UserIcon className="mobilemenu__icon" />
        </NavLink>
      </ul>
    </div>
  );
}

export default MobileMenu;
