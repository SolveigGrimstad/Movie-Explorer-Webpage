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
        /*if (req.params.id) {
            const movie_filter = { _id: req.params.id };*/
        this.movie_service.filterUser({}, (err, movie_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('get movie successfull', movie_data, res);
            }
        });
        /*
    } else {
        insufficientParameters(res);
    }*/
    }
}
exports.movieController = movieController;
