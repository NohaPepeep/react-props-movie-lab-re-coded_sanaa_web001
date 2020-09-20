<<<<<<< HEAD
import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
   return movieData.map(n => { return <MovieCard title={n.title} IMDBRating={n.IMDBRating} genres={n.genres} poster={n.poster} /> }
      )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
        
      </div>
    )
  }
}
=======
import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map(item => <li>{item.title}<li>
    <li>{item.IMDBRating}<li>
    )
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
>>>>>>> 2b1311e2ab9f74ceeeb1a0399c0c282529bb0124
