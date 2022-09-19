# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs all the package dependencies used in this project


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Documentation & Guide

The movies are fetched using [IMDB Api](https://imdb-api.com/).
The API is called inside the movieSlice file and extra reducers are used to track and manipulate the call accordingly.
Once the api is successfully called the loading is set to false and we store the movies fetched.
You can filter the movies by title, rating, genre & release year.
The rating & release year filters have 2 fields one for minimum rating/year and one for maximum.
If only minimum is chosen in each field the maximum is automatically the highest value it can be.
Once the filters are entered and search is clicked the API will be called with the included parameters.
After the API is called the parameters are reset to blank.
Clicking Go to movie will re-route you to a single movie page where you can read extra details from chosen movie.


### Packages used
Redux
Redux Toolkit
React Router Dom
Axios
Bootstrap
React Spinners
