import * as actionTypes from "./actionTypes"
/* Trenger kanskje ikke denne
export function getMovie(movie: Imovie) {
  const action: MovieAction = {
    type: actionTypes.GET_MOVIE,
    movie,
  }
//Hva gjør denne?
  return simulateHttpRequest(action)
}
*/

export function searchMovie(movie: Imovie) {
  const action: MovieAction = {
    type: actionTypes.SEARCH_MOVIE,
    movie,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: MovieAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}