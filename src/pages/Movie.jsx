import React from "react";
import { useLocation } from "react-router-dom";

const Movie = () => {
  const movie = useLocation();
  console.log(movie);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-lg-4 mt-3">
          <img
            src={movie.state.image}
            alt="movie poster"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-12 col-lg-8 mt-3">
          <h1>{movie.state.title}</h1>
          <h2 className="text-start">
            <b>Release year: </b> {movie.state.description}
          </h2>
          <h2 className="text-start">
            <b>Genres: </b> {movie.state.genres}
          </h2>
          <h2 className="text-start">
            <b>IMDB Rating: </b> {movie.state.imDbRating}
          </h2>
          <h4 className="text-start"><b>Plot: </b>{movie.state.plot}</h4>
          <h3 className="text-start"><b>Cast: </b></h3>
          {movie.state.starList.map((star) => (
            <h3 className="text-start">{star.name}</h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
