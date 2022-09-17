import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncMovies, getMovies } from '../redux/movieSlice';


const Home = () => {

    const dispatch = useDispatch();
    const movies = useSelector(getMovies)


    const [parameters, setParameters] = useState({
      search: '',
      genre: ',',
      rating: ',',
      year: ','
    })


    useEffect(() => {
      
        dispatch(fetchAsyncMovies(parameters))
    
    }, [dispatch, parameters])
    


    console.log(movies.results);

  return (
    <div>Home</div>
  )
}

export default Home