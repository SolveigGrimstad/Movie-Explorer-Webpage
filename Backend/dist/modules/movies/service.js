"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
    /*
    public filterMovie(query: any, callback: any) {
      movies.find(query, callback).limit(24);
      //fetches out 24 movies
  */
    filterMovie(query, page, callback) {
        const perPage = 24;
        if (query.length > 0) {
            //if there are some genres that are requested
            let filterlist = query.map((value) => ({
                Genre: { $regex: new RegExp(value, "i") },
            }));
            //makes a list for every genre object. Checks the Genre-field in the database
            schema_1.default
                .find({ $and: filterlist }, callback)
                .skip(perPage * (page - 1))
                .limit(perPage);
            //.then((movies) => res.json(movies));
            //finds every object that satisfies all the genre objects, AND operator
        }
        else {
            schema_1.default
                .find({}, callback)
                .skip(perPage * (page - 1))
                .limit(perPage);
            //if not, finds all the movies
        }
        //movies
        // .find({ Genre: { $regex: new RegExp("Adventure", "i") } }, callback)
        //  .limit(24);
        //fetches out 20 movies
    }
    movieSearch(query, page, callback) {
        const perPage = 24;
        schema_1.default
            .find(query, callback)
            .skip(perPage * (page - 1))
            .limit(perPage);
        /*
        try {
          const movies = await Movie.paginate }*/
    }
}
exports.default = UserService;
