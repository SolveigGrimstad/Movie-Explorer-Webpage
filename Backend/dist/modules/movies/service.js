"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
    /*
    public filterMovie(query: any, callback: any) {
      movies.find(query, callback).limit(24);
      //fetches out 24 movies
  */
    filterMovie(query, callback) {
        if (query.length > 0) {
            //if there are some genres that are requested
            let filterlist = query.map((value) => ({
                Genre: { $regex: new RegExp(value, "i") },
            }));
            //makes a list for every genre object. Checks the Genre-field in the database
            schema_1.default.find({ $and: filterlist }, callback).limit(24);
            //finds every object that satisfies all the genre objects, AND operator
        }
        else {
            schema_1.default.find({}, callback).limit(24);
            //if not, finds all the movies
        }
        //movies
        // .find({ Genre: { $regex: new RegExp("Adventure", "i") } }, callback)
        //  .limit(24);
        //fetches out 20 movies
    }
    movieSearch(query, callback) {
        schema_1.default.find(query, callback).limit(24);
    }
    sortMovies(query, callback) {
        schema_1.default.find({}, callback).sort({ "Ratings": -1 }).limit(24);
    }
}
exports.default = UserService;
