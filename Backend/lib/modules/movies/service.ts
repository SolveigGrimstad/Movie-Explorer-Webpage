import { IMovie } from "./model";
import movies from "./schema";

export default class UserService {

  public filterMovie(query: any, callback: any) {
    movies.find(query, callback).limit(24);
    //fetches out 20 movies
  }

}
