import { IMovie } from "./model";
import movies from "./schema";
import { MovieRoutes } from "routes/movie_routes";
import { Request, Response } from "express";

export default class UserService {
  /*
  public filterMovie(query: any, callback: any) {
    movies.find(query, callback).limit(24);
    //fetches out 24 movies
*/

  public filterMovie(
    //query: any,
    filterquery: any,
    req: any,
    page: number,
    callback: any
  ) {
    const perPage = 24;
    const sort = req.params.sort;

    if (filterquery.length > 0) {
      //if there are some genres that are requested
      let filterlist = filterquery.map((value: any) => ({
        Genre: { $regex: new RegExp(value, "i") },
      }));
      //makes a list for every genre object. Checks the Genre-field in the database

      movies
        .find({ $and: filterlist }, callback)
        .skip(perPage * (page - 1))
        .sort(sort)
        .limit(perPage);

      //.then((movies) => res.json(movies));
      //finds every object that satisfies all the genre objects, AND operator
    } else {
      movies
        .find({}, callback)
        .skip(perPage * (page - 1))
        .sort(sort)
        .limit(perPage);
      //if not, finds all the movies
    }
  }

  public movieSearch(query: any, page: number, callback: any) {
    const perPage = 24;

    movies
      .find(query, callback)
      .skip(perPage * (page - 1))
      .limit(perPage);
    /*
    try {
      const movies = await Movie.paginate }*/
  }



  public updateUser(movie_params: IMovie, callback: any) {
    const query = { _id: movie_params._id };
    movies.findOneAndUpdate(query, movie_params, callback);
  }
}
