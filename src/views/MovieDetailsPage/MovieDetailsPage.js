import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { fetchMovieDetails } from "service/fetchApi";
import Cast from "../../components/Cast";
import CastDetails from "../../components/CastDetails";
import Review from "../../components/Review";
import ReviewDetails from "../../components/ReviewDetails";
import MovieCard from "../../components/MovieCard";
import routes from "routes";
import arrow from "images/arrow_back_black_24dp.svg";
import style from "../MovieDetailsPage/MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    title: null,
    vote_average: null,
    overview: null,
    poster_path: null,
    genres: [],
    isLoading: false,
    adult: false,
    release_date: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const { movieId } = this.props.match.params;

    const response = await fetchMovieDetails(Number(movieId));

    this.setState({ ...response.data, isLoading: false });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const { location, match } = this.props;
    return (
      <>
        <div className={style.movie_div}>
          <button
            className={style.button}
            type="button"
            onClick={this.handleGoBack}
          >
            <img className={style.arrow_img} src={arrow} alt="go back" />
            Go back
          </button>
          <MovieCard
            title={this.state.title}
            vote_average={this.state.vote_average}
            overview={this.state.overview}
            genres={this.state.genres}
            poster_path={this.state.poster_path}
            release_date={this.state.release_date}
          />
        </div>
        <h2>Additional information</h2>
        <ul className={style.cast_list}>
          <Cast location={location} match={match} />
          <Review location={location} match={match} />
        </ul>

        <Switch>
          <Route exact path={`${match.path}/cast`} component={CastDetails} />
          <Route
            exact
            path={`${match.path}/reviews`}
            component={ReviewDetails}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
