"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const movieController_1 = require("../controllers/movieController");
class MovieRoutes {
    constructor() {
        this.movie_controller = new movieController_1.movieController();
    }
    route(app) {
        app.get("/api/movies/:page/", (req, res) => {
            this.movie_controller.get_movie(req, res);
        });
        /*
        app.get("/api/movieinfo/:id", (req: Request, res: Response) => {
          this.movie_controller.get_id(req, res);
        });
        */
        app.get("/api/search/:title/:page/", (req, res) => {
            this.movie_controller.search_movies(req, res);
        });
    }
}
exports.MovieRoutes = MovieRoutes;
