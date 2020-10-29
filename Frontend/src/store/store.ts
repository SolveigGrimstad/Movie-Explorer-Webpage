import { createStore, combineReducers, Store } from "redux";

//Typene brukt i state
export type Person = {
    id: number;
    name: string;
};
export type AppState = {
    people: Person[];
    movieId: string;
    heartLike: number;
};
//Funksjoner som returnerer action-objekter
export function addPerson(personName: string) {
    return {
        type: "ADD_PERSON",
        payload: personName
    } as const;
}
export function removePerson(id: number) {
    return {
        type: "REMOVE_PERSON",
        payload: id
    } as const;
}

export function setMovieId(id: string) {
    return {
        type: "SET_MOVIE_ID",
        payload: id
    } as const;
}

export function addLike(like: number) {
    return {
        type: "ADD_LIKE",
        payload: like
    } as const;
}
export function removeLike(like: number) {
    return {
        type: "REMOVE_LIKE",
        payload: like
    } as const;
}

type Actions = ReturnType<typeof addPerson> | ReturnType<typeof removePerson> ;
type MovieActions = ReturnType<typeof setMovieId>;
type LikeAction = ReturnType<typeof addLike> | ReturnType<typeof removeLike> ;

//Reducer-funksjonen, initialiserer store med tom liste
function peopleReducer(state: Person[] = [], action: Actions) {
    switch (action.type) {
        case "ADD_PERSON":
            return state.concat({ id: state.length + 1, name: action.payload });
        case "REMOVE_PERSON":
            return state.filter(person => person.id !== action.payload);
        default:
            neverReached(action);
    }
    return state;
}

function movieIdReducer(state: string = "", action: MovieActions) {
    switch (action.type) {
        case "SET_MOVIE_ID":
            return state;
        default:
            console.log(action);
    }
    return state;
}

function likeReducer(state: number, action: LikeAction){
    switch(action.type){
        case"ADD_LIKE":
            return state ;
        case "REMOVE_LIKE":
            return state;
        default:
            console.log(action);
            neverReached(action);
    }
    return state;
}

function neverReached(never: never) {}
function neverReached2(never: never) {}

//Utility-funksjon for å kombinere flere reducere
const rootReducer = combineReducers<AppState>({
    people: peopleReducer, 
    movieId: movieIdReducer,
    heartLike: likeReducer,
});

function configureStore(): Store<AppState> {
    const store = createStore(rootReducer, undefined);
    return store;
}
//Hvis du vil bruke redux dev tools kan du erstatte undefined med
//(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

//Oppretter en store
export const store = configureStore();