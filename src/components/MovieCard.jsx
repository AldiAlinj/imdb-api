import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const { movie } = props;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={movie.image}
          width={250}
          height={400}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title fs-5">{movie.title}</h5>
          <p className="card-text">{movie.plot}</p>
          <Link
            to={`/movie/${movie.id}`}
            state={movie}
            className="btn btn-primary"
          >
            Go to movie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
