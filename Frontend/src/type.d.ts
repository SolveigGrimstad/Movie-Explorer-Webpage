interface Imovie {
    
    title: String;
/*
    id?: String;
    year: String;
    genre: String;
    rating: String;

*/

  }
  
  type MovieState = {
    movie: IMovie[]
  }
  
  type MovieAction = {
    type: string
    movie: IMovie
  }
  
  type DispatchType = (args: MovieAction) => MovieAction