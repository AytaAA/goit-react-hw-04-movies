import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import style from "../Review/Review.module.css";

const Review = ({ match, location }) => {
  return (
    <li>
      <NavLink
        to={{
          pathname: `${match.url}/reviews`,
          state: { from: location.state?.from && location.state.from },
        }}
        className={style.Reviews_NavLink}
        activeClassName="Reviews-NavLink--active"
      >
        Reviews
      </NavLink>
    </li>
  );
};

export default withRouter(Review);
