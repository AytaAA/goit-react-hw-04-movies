import React, { Component } from "react";
import { fetchMovieCast } from "service/fetchApi";
import style from "../../components/CastDetails/CastDetails.module.css";

class CastDetails extends Component {
  state = {
    cast: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const arr = this.props.match.url.split("/");
    const movieId = arr[arr.length - 2];

    const response = await fetchMovieCast(movieId);

    this.setState({ ...response.data, isLoading: false });
  }

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                width="100px"
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />

              <h3 className={style.cast_name}>{name}</h3>
              <h4 className={style.cast_role}>Character: {character}</h4>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default CastDetails;
