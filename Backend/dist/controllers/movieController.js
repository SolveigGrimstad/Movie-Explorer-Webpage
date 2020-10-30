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
        const page = Math.max(0, parseInt(req.params.page));
        const title = req.query.title;
        const movie_search = { Title: { $regex: title, $options: "i" } };
        //const likes = req.query.starRating;
        if (true) {
            //when its a filter
            console.log("hei");
            let filters = req.query.filter.toString().split(",");
            this.movie_service.actionMovie(title, filters, req, page, 
            // likes,
            (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
        else {
            //no filter, empty list of filters
            console.log("hoppa over");
            this.movie_service.actionMovie(title, [], req, page, 
            //likes,
            (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
    }
    search_movies(req, res) {
        const title = req.params.title;
        const page = Math.max(0, parseInt(req.params.page));
        const movie_search = { Title: { $regex: title, $options: "i" } };
        this.movie_service.movieSearch(movie_search, page, (err, title_data) => {
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
