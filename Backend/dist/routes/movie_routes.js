"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieRoutes = void 0;
const movieController_1 = require("../controllers/movieController");
const rating = require('../modules/movies/schema');
class MovieRoutes {
    constructor() {
        this.movie_controller = new movieController_1.movieController();
    }
    route(app) {
        app.get("/api/movies/", (req, res) => {
            this.movie_controller.get_movie(req, res);
        });
        app.get("/api/movieinfo/:id", (req, res) => {
            this.movie_controller.get_id(req, res);
        });
        /*
            app.put('/api/user/:id', (req: Request, res: Response) => {
              this.movie_controller.update_likes(req, res);
          });
        
        */
        app.put('/:starRating', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedRating = yield rating.updateOne({ _id: req.params.id }, { $inc: { starRating: 1 } });
                res.json(updatedRating);
            }
            catch (err) {
                res.json({ message: err });
            }
        }));
    }
}
exports.MovieRoutes = MovieRoutes;
