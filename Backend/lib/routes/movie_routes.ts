import { Application, Request, Response } from "express";
import { movieController } from "../controllers/movieController";
import movies from "../modules/movies/schema";

export class MovieRoutes {
  private movie_controller: movieController = new movieController();

  public route(app: Application) {
    app.get("/api/movies/:sort/:page/", (req: Request, res: Response) => {
      this.movie_controller.get_movie(req, res);
    });

    app.get("/api/search/:title/:page/", (req: Request, res: Response) => {
      this.movie_controller.search_movies(req, res);
    });

  


    app.put("/api/like/:movieid", async (req, res) => {
      movies
        .findOneAndUpdate(
          { _id: req.params.movieid },
          { $inc: { starRating: 1 } },
          { new: true }
        )
        .then((data) => res.json(data));
    });

    app.put("/api/dislike/:movieid", async (req, res) => {
      movies
        .findOneAndUpdate(
          { _id: req.params.movieid },
          { $inc: { starRating: -1 } },
          { new: true }
        )
        .then((data) => res.json(data));
    });
  }
}
