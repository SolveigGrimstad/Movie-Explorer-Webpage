import { IMovie } from "./model";
import movies from "./schema";

export default class UserService {
  public filterUser(query: any, callback: any) {
    if (query.length > 0) {
      //if there are some genres that are requested
      let filterlist = query.map((value) => ({
        Genre: { $regex: new RegExp(value, "i") },
      }));
      //makes a list for every genre object. Checks the Genre-field in the database

      movies.find({ $and: filterlist }, callback).limit(24);
      //finds every object that satisfies all the genre objects, AND operator
    } else {
      movies.find({}, callback).limit(24);
      //if not, finds all the movies
    }

    //movies
    // .find({ Genre: { $regex: new RegExp("Adventure", "i") } }, callback)
    //  .limit(24);
    //fetches out 20 movies
  }

  public filterUser1(query: any, callback: any) {
    movies.findOne(query, callback);
    //fetches out 20 movies
  }
}
