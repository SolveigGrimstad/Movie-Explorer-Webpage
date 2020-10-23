import Moviebox from "../components/moviebox"
import * as actionTypes from "./actionTypes"

const initialState: MovieState = {
 /*

 Hva skal stå inni her
    movies: [

    {
        title: 
    }

    
  ],

  */
}

const reducer = (
    state: MovieState = initialState,
    action: MovieAction
  ): MovieState => {
    switch (action.type) {
      case actionTypes.SEARCH_MOVIE:
        const newMovie: Imovie = {
          
        //hvordan få tak i 
          title: action.movie.title
  
        }
        return {
          ...state,
          movie: state.movie.concat(newMovie),
        }
      
    }
    return state
  }
  
  export default reducer

