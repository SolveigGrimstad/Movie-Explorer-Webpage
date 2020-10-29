"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/movies/service");
class movieController {
    constructor() {
        this.movie_service = new service_2.default();
    }
    get_movie(req, res) {
        if (req.query.filter) {
            let filters = req.query.filter.toString().split(",");
            this.movie_service.filterMovie(filters, (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
        else {
            //console.log("without filter");
            this.movie_service.filterMovie([], (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
        /*
            } else {
                insufficientParameters(res);
            }*/
    }
    search_movies(req, res) {
        const title = req.params.title;
        const movie_search = { Title: { $regex: title, $options: "i" } };
        this.movie_service.movieSearch(movie_search, (err, title_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse("get title successfull", title_data, res);
            }
        });
    }
    sort_movies(req, res) {
        this.movie_service.sortMovies([], (err, title_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse("get title successfull", title_data, res);
            }
        });
    }
}
exports.movieController = movieController;
