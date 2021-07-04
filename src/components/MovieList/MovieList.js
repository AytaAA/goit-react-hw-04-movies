import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <NavLink
            to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}
          >
            {movie.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default withRouter(MovieList);
