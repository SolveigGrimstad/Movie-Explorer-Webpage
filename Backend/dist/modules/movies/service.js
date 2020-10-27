"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("./schema");
class UserService {
    filterMovie(query, callback) {
        schema_1.default.find(query, callback).limit(24);
        //fetches out 24 movies
    }
    movieSearch(query, callback) {
        schema_1.default.find(query, callback).limit(24);
    }
}
exports.default = UserService;
