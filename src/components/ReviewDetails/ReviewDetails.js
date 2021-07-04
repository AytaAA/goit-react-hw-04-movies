import React, { Component } from "react";

import { fetchMovieReview } from "service/fetchApi";

class ReviewDetails extends Component {
  state = {
    reviews: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const arr = this.props.match.url.split("/");
    const movieId = arr[arr.length - 2];

    const response = await fetchMovieReview(movieId);

    this.setState({ reviews: response.data.results, isLoading: false });
  }

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </>
    );
  }
}

export default ReviewDetails;
