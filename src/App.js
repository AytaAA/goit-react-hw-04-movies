import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import routes from "./routes";

//views

//components
import AppBar from "./components/AppBar";
import Container from "../src/components/Container";

//lazy

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage.js" /*webpackChunkName: "home-view" */)
);
const MoviesPage = lazy(() =>
  import(
    "./views/MoviesPage/MoviesPage.js" /*webpackChunkName: "movies-view" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage.js" /*webpackChunkName: "movie-details-view" */
  )
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route exact path={routes.home} component={HomePage} />
              <Route exact path={routes.movies} component={MoviesPage} />
              <Route path={routes.moviePage} component={MovieDetailsPage} />
              <Redirect to={routes.home} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

export default App;
