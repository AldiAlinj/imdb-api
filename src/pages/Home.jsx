import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncMovies, getLoading, getMovies } from "../redux/movieSlice";
import "react-calendar/dist/Calendar.css";
import MovieCard from "../components/MovieCard";
import { GridLoader } from "react-spinners";
import InputField from "../components/InputField";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector(getMovies);
  const loading = useSelector(getLoading);

  const genres = [
    "Action",
    "Adventure",
    "animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "Game-Show",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "News",
    "Reality-Tv",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Talk-Show",
    "Thriler",
    "War",
  ];

  const ratings = [
    "1.0",
    "2.0",
    "3.0",
    "4.0",
    "5.0",
    "6.0",
    "7.0",
    "8.0",
    "9.0",
    "10.0",
  ];

  const [parameters, setParameters] = useState({
    title: "",
    genre: "",
    minRating: "",
    maxRating: "",
    startDate: "",
    endDate: "",
  });

  const searchMovies = () => {
 
      dispatch(fetchAsyncMovies(parameters));
    

    setParameters({
      title: "",
      genre: "",
      minRating: "",
      maxRating: "",
      startDate: "",
      endDate: "",
    });
  };

  useEffect(() => {
    dispatch(fetchAsyncMovies(parameters));
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>IMDB API</h1>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <InputField
          label="Title"
          children={
            <input
              type="text"
              className="form-control"
              id="search"
              placeholder="Search..."
              onChange={(event) =>
                setParameters({ ...parameters, title: event.target.value })
              }
            />
          }
        />
        <InputField
          label="Minimal Rating"
          children={
            <select
              className="form-select"
              id="rating"
              onChange={(event) =>
                setParameters({ ...parameters, minRating: event.target.value })
              }
            >
              <option defaultValue>Minimal Rating</option>
              {ratings.map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          }
        />
        <InputField
          label="Maximum Rating"
          children={
            <select
              disabled={parameters.minRating === "" ? true : false}
              className="form-select"
              id="rating"
              onChange={(event) =>
                setParameters({
                  ...parameters,
                  maxRating: event.target.value,
                })
              }
            >
              <option defaultValue>Maximal Rating</option>
              {ratings
                .slice(parameters.minRating, ratings.length)
                .map((rating) => (
                  <option key={rating} value={rating}>
                    {rating}
                  </option>
                ))}
            </select>
          }
        />
        <InputField
          label="Genre"
          children={
            <select
              className="form-select"
              id="genre"
              onChange={(event) =>
                setParameters({ ...parameters, genre: event.target.value })
              }
            >
              <option defaultValue>Choose...</option>
              {genres.map((genre, index) => (
                <option key={index} value={genre.toLowerCase()}>
                  {genre}
                </option>
              ))}
            </select>
          }
        />
        <InputField
          label="From"
          children={
            <input
              type="date"
              className="form-control"
              id="startDate"
              onChange={(event) =>
                setParameters({ ...parameters, startDate: event.target.value })
              }
            />
          }
        />
        <InputField
          label="To"
          children={
            <input
              disabled={parameters.startDate === "" ? true : false}
              type="date"
              className="form-control"
              min={parameters.startDate}
              id="endDate"
              onChange={(event) =>
                setParameters({
                  ...parameters,
                  endDate: event.target.value,
                })
              }
            />
          }
        />
        <div className="col-sm-12 col-md-4 col-lg-2 m-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={searchMovies}
          >
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <div>
          <div className="d-flex justify-content-center align-items-center mt-5">
            <GridLoader />
          </div>
        </div>
      ) : (
        <div className="container-fluid">
          {movies.results.length === 0 ? (
            <h1>No results from your search. Please try again.</h1>
          ) : (
            <div className="row gy-3">
              {movies.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
