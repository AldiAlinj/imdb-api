import React from 'react'
import {  useLocation } from "react-router-dom";


const SearchResults = () => {


  const data = useLocation()

  console.log(data.state);


  return (
    <div>SearchResults</div>
  )
}

export default SearchResults