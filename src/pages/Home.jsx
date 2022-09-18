import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncMovies, getLoading, getMovies } from '../redux/movieSlice';
import 'react-calendar/dist/Calendar.css';

const Home = () => {

    const dispatch = useDispatch();
    const movies = useSelector(getMovies)
    const loading = useSelector(getLoading)
    
    const genres = [
      'Action',
      'Adventure',
      'animation',
      'Biography',
      'Comedy',
      'Crime',
      'Documentary',
      'Drama',
      'Family',
      'Fantasy',
      'Film-Noir',
      'Game-Show',
      'History',
      'Horror',
      'Music',
      'Musical',
      'Mystery',
      'News',
      'Reality-Tv',
      'Romance',
      'Sci-Fi',
      'Sport',
      'Talk-Show',
      'Thriler',
      'War',
    ]

    


    const [parameters, setParameters] = useState({
      search: '',
      genre: ',',
      rating: ',',
      startDate: '',
      endDate: ''
    })
    
   
    const searchMovies = () => {

      const [day, month, year] = parameters.startDate.split('-')
      const formatedStartDate = [year, month, day].join('-')

      setParameters({...parameters, startDate: formatedStartDate})

      console.log(parameters.startDate);


      // if(parameters.startDate !== '' && parameters.endDate == ''){
      //   alert('Please enter an end date')
      // }else if(parameters.startDate == '' && parameters.endDate !== ''){
      //   alert('Please enter a start date!')
      // }else{
      //   dispatch(fetchAsyncMovies(parameters))
      // }
    }
  

    useEffect(() => {
      
        dispatch(fetchAsyncMovies(parameters))
    
    }, [dispatch])


    
    
  return (
    loading ? (
      <div>
        loading
      </div>

    )
    : (
      <div className='container'>
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
        <label for="basic-url" class="form-label">Title</label>
          <div class="input-group mb-3">
            <input type="text" class="form-control" id="search" placeholder='Search...' onChange={(title) => setParameters({...parameters, search: title}) } />
          </div>
        </div>
        <div className="col-2">
        <label for="basic-url" class="form-label">Rating</label>
        <div class="input-group mb-3">
          <select class="form-select" id="rating" onChange={(rating) => setParameters({...parameters, rating: rating})}>
            <option selected>Choose...</option>
            <option value="1">One star</option>
            <option value="2">Two stars</option>
            <option value="3">Three stars</option>
            <option value="4">Four stars</option>
            <option value="5">Five stars</option>
          </select>
        </div>
        </div>
        <div className="col-2">
        <label for="basic-url" class="form-label">Genre</label>
        <div class="input-group mb-3">
          <select class="form-select" id="genre" onChange={(genre) => setParameters({...parameters, genre: genre})}>
            <option selected>Choose...</option>
            {genres.map((genre) => (
            <option value={genre.toLowerCase()}>{genre}</option>

            ))}
          </select>
        </div>
        </div>
        <div className="col-2">
        <label for="basic-url" class="form-label">Starting Year</label>
        <div class="input-group mb-3 d-flex justify-content-center align-items-center">
          <label htmlFor="startDate">From</label>
           <input type="date" class="form-control" id="startDate" onChange={(startDate) => setParameters({...parameters, startDate: startDate})} />
        </div>
        </div>
        <div className="col-2">
        <label for="basic-url" class="form-label">Ending Year</label>
        <div class="input-group mb-3 d-flex justify-content-center align-items-center">
          <label htmlFor="endDate">To</label>
           <input type="date" class="form-control" min={parameters.startDate} id="endDate" onChange={(endDate) => setParameters({...parameters, endDate: endDate})} />
        </div>
        </div>
        <div className="col-2">
        <button type="button" class="btn btn-primary" onClick={searchMovies}>Search</button>
        </div>
       
      </div>
    <div className="container-fluid">
      <div className="row gy-3">
       {movies.results.map((movie) => (
         <div className="col-4 d-flex justify-content-center align-items-center">
         <div class="card" style={{width: '18rem'}}>
           <img src={movie.image} width={250} height={400} class="card-img-top" alt="..." />
           <div class="card-body">
             <h5 class="card-title fs-5">{movie.title}</h5>
             <p class="card-text">{movie.plot}</p>
             <a href="" class="btn btn-primary">Go to movie</a>
           </div>
         </div>
         </div>
       ))}
      </div>
    </div>
    </div>
    )
  )
}

export default Home