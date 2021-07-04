import React from "react";
import style from "./MovieCard.module.css";

const MovieCard = ({
  title,
  vote_average,
  overview,
  genres,
  poster_path,
  release_date,
}) => (
  <div className={style.movie_info_div}>
    <div className={style.poster_div}>
      <img
        width="300px"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="poster"
      />
    </div>
    <div className={style.info_div}>
      <h1>
        {title} ({(release_date + "").slice(0, 4)})
      </h1>
      <h3>
        User Score:{" "}
        <span className={style.genres_percentage}>{vote_average * 10}%</span>
      </h3>
      <h3>Overview</h3>
      <p> {overview}</p>
      <h3>Genres</h3>
      <ul className={style.genres_list}>
        {genres.map(({ id, name }) => (
          <li className={style.genres_item} key={id}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default MovieCard;
