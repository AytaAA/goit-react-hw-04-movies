import MovieList from "../../components/MovieList";
import React, { Component } from "react";
import { fetchTrending } from "service/fetchApi";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetchTrending();

    this.setState({ movies: response.data.results, isLoading: false });
  }

  render() {
    return (
      <>
        <h1>Trending Today</h1>
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage;
