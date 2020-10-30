import { createStore, combineReducers, Store } from "redux";
import filterReducer from "../updateGenreFilter";

export type AppState = {
  movieId: string;
  filter: string[];
};

export function setMovieId(id: string) {
  return {
    type: "SET_MOVIE_ID",
    payload: id,
  } as const;
}

export const GENRE_UPDATED_FILTER = "GENRE_UPDATED_FILTER";

export function updateGenreFilter(newFilter: string = "") {
  return {
    type: GENRE_UPDATED_FILTER,
    payload: newFilter,
  };
}

type MovieActions = ReturnType<typeof setMovieId>;

//Reducer-funksjonen, initialiserer store med tom liste
function movieIdReducer(state: string = "", action: MovieActions) {
  switch (action.type) {
    case "SET_MOVIE_ID":
      return state;
    default:
      console.log(action);
  }
  return state;
}

//Utility-funksjon for å kombinere flere reducere
const rootReducer = combineReducers<AppState>({
  movieId: movieIdReducer,
  filter: filterReducer,
});

function configureStore(): Store<AppState> {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}

//Oppretter en store
export const store = configureStore();
