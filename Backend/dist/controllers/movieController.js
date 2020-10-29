"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/movies/service");
class movieController {
    constructor() {
        this.movie_service = new service_2.default();
        /*
      
        public sort_movies(req: Request, res: Response) {
          const sort = req.params.sort;
      
          this.movie_service.sortMovies(req, (err: any, title_data: IMovie) => {
            if (err) {
              mongoError(err, res);
            } else {
              successResponse("get title successfull", title_data, res);
            }
          });
        }
        */
    }
    get_movie(req, res) {
        const page = Math.max(0, parseInt(req.params.page));
        const title = req.query.title;
        //const movie_search = { Title: { $regex: title, $options: "i" } };
        if (req.query.filter) {
            console.log("hei");
            let filters = req.query.filter.toString().split(",");
            this.movie_service.filterMovie(
            //movie_search,
            filters, req, page, (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
        else {
            console.log("hoppa over");
            this.movie_service.filterMovie(
            //movie_search,
            [], req, page, (err, movie_data) => {
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
