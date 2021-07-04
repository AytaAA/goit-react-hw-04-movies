import React, { Component } from "react";
import { fetchSearch } from "service/fetchApi";
import MovieList from "../../components/MovieList";
import Search from "../../components/Search";

class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);

    this.setState({ isLoading: true });

    if (searchParams.get("query")) {
      fetchSearch(searchParams.get("query"))
        .then((response) => {
          this.setState({ movies: response.data.results });
        })
        .catch((error) => {
          this.setState({ error });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onChangeSearch = (e) => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;

    fetchSearch(query)
      .then((response) => {
        this.setState({ movies: response.data.results });
        this.onQueryChange();
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  onQueryChange = () => {
    const { history, location } = this.props;

    history.push({
      pathname: location.pathname,
      search: `query=${this.state.query.trim()}`,
    });
  };

  render() {
    return (
      <>
        <Search
          query={this.state.query}
          onChangeSearch={this.onChangeSearch}
          onFormSubmit={this.onFormSubmit}
        />
        <MovieList movies={this.state.movies} />
      </>
    );
  }
}

export default MoviesPage;
