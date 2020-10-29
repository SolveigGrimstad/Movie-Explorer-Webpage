"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/movies/service");
class movieController {
    constructor() {
        this.movie_service = new service_2.default();
        /*
      
        public search_movies(req: Request, res: Response) {
          const title = req.params.title;
          const page = Math.max(0, parseInt(req.params.page));
      
          const movie_search = { Title: { $regex: title, $options: "i" } };
          this.movie_service.movieSearch(
            movie_search,
            page,
            (err: any, title_data: IMovie) => {
              if (err) {
                mongoError(err, res);
              } else {
                successResponse("get title successfull", title_data, res);
              }
            }
          );
        }
      
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
        const sort = req.params.sort;
        const title = req.params.title;
        if (req.query.filter) {
            console.log("hei");
            let filters = req.query.filter.toString().split(",");
            this.movie_service.filterMovie(
            //req,
            filters, page, (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
        else {
            console.log("without filter");
            this.movie_service.filterMovie(
            //req,
            [], page, (err, movie_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get movie successfull", movie_data, res);
                }
            });
        }
    }
}
exports.movieController = movieController;
