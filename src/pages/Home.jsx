import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncMovies, getLoading, getMovies } from "../redux/movieSlice";
import "react-calendar/dist/Calendar.css";

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

  const [parameters, setParameters] = useState({
    title: "",
    genre: "",
    rating: "",
    startDate: "",
    endDate: "",
  });

  const searchMovies = () => {
    if (parameters.startDate !== "" && parameters.endDate === "") {
      alert("Please enter an end date");
    } else if (parameters.startDate === "" && parameters.endDate !== "") {
      alert("Please enter a start date!");
    } else {
      dispatch(fetchAsyncMovies(parameters));
    }

    setParameters({
      search: "",
      genre: "",
      rating: "",
      startDate: "",
      endDate: "",
    });
  };

  useEffect(() => {
    dispatch(fetchAsyncMovies(parameters));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>IMDB API</h1>
        </div>
      </div>
      <div className="col-12">
        <h1>Filter Movies</h1>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-2">
          <label for="basic-url" class="form-label">
            Title
          </label>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              id="search"
              placeholder="Search..."
              onChange={(event) =>
                setParameters({ ...parameters, title: event.target.value })
              }
            />
          </div>
        </div>
        <div className="col-2">
          <label for="basic-url" class="form-label">
            Rating
          </label>
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="rating"
              onChange={(event) =>
                setParameters({ ...parameters, rating: event.target.value })
              }
            >
              <option selected>Choose...</option>
              <option value="1.0">One star</option>
              <option value="2.0">Two stars</option>
              <option value="3.0">Three stars</option>
              <option value="4.0">Four stars</option>
              <option value="5.0">Five stars</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <label for="basic-url" class="form-label">
            Genre
          </label>
          <div class="input-group mb-3">
            <select
              class="form-select"
              id="genre"
              onChange={(event) =>
                setParameters({ ...parameters, genre: event.target.value })
              }
            >
              <option selected>Choose...</option>
              {genres.map((genre) => (
                <option value={genre.toLowerCase()}>{genre}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-2">
          <label for="basic-url" class="form-label">
            Starting Year
          </label>
          <div class="input-group mb-3 d-flex justify-content-center align-items-center">
            <label className="me-2" htmlFor="startDate">
              From{" "}
            </label>
            <input
              type="date"
              class="form-control"
              id="startDate"
              onChange={(event) =>
                setParameters({ ...parameters, startDate: event.target.value })
              }
            />
          </div>
        </div>
        <div className="col-2">
          {parameters.startDate === "" ? null : (
            <>
              <label for="basic-url" class="form-label">
                Ending Year
              </label>
              <div class="input-group mb-3 d-flex justify-content-center align-items-center">
                <label className="me-2" htmlFor="endDate">
                  To{" "}
                </label>
                <input
                  type="date"
                  class="form-control"
                  min={parameters.startDate}
                  id="endDate"
                  onChange={(event) =>
                    setParameters({
                      ...parameters,
                      endDate: event.target.value,
                    })
                  }
                />
              </div>
            </>
          )}
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-primary" onClick={searchMovies}>
            Search
          </button>
        </div>
      </div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="container-fluid">
          <div className="row gy-3">
            {movies.results.map((movie) => (
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={movie.image}
                    width={250}
                    height={400}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title fs-5">{movie.title}</h5>
                    <p class="card-text">{movie.plot}</p>
                    <a href="" class="btn btn-primary">
                      Go to movie
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
