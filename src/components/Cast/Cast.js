import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "../Cast/Cast.module.css";

const Cast = ({ match, location }) => {
  return (
    <li>
      <NavLink
        to={{
          pathname: `${match.url}/cast`,
          state: { from: location.state?.from && location.state.from },
        }}
        className={style.Cast_NavLink}
        activeClassName="Cast-NavLink--active"
      >
        Cast
      </NavLink>
    </li>
  );
};

export default withRouter(Cast);
