"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
    filterUser(query, callback) {
        schema_1.default.find(query, callback).limit(24);
        //fetches out 20 movies
    }
    filterUser1(query, callback) {
        schema_1.default.findOne(query, callback);
        //fetches out 20 movies
    }
    updateUser(movie_params, callback) {
        const query = { _id: movie_params._id };
        schema_1.default.findOneAndUpdate(query, movie_params, callback);
    }
}
exports.default = UserService;
