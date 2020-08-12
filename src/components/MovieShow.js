import React from 'react'; 

// here we add 'match' to the args so we can access the path information 
// in routerProps that is passed from MoviesPage.js
const MovieShow = ({match, movies}) => {
    return (
         <div>
             
             <h3>movies[match.params.movieId].title</h3>
         </div>
         // above we access the movie id store in match.params to render information about the selected movie
    );
};

export default MovieShow;