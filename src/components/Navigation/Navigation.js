import React from "react";
import routes from "../../routes";
import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className="nav nav-pills">
      <ul className={style.navig_list}>
        <li className={style.nav_item}>
          <NavLink
            exact
            to={routes.home}
            className={style.NavLink}
            activeClassName="NavLink--active"
          >
            Home
          </NavLink>
        </li>
        <li className={style.nav_item}>
          <NavLink
            to={routes.movies}
            className={style.NavLink}
            activeClassName="NavLink--active"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
