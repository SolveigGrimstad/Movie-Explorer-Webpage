import { Application, Request, Response } from "express";
import { movieController } from "../controllers/movieController";

const Movie  = require('../modules/movies/schema');

export class MovieRoutes {
  private movie_controller: movieController = new movieController();

  public route(app: Application) {
    app.get("/api/movies/", (req: Request, res: Response) => {
      this.movie_controller.get_movie(req, res);
    });

    app.get("/api/movieinfo/:id", (req: Request, res: Response) => {
      this.movie_controller.get_id(req, res);
    });
/*
    app.put('/api/moviebox/:id', (req: Request, res: Response) => {
      this.movie_controller.update_likes(req, res);
  });

*/
  app.put('/:moiveid', async (req, res) => {
    try {
      const updatedRating = await Movie.updateOne(
        { _id: req.params.movieid },
        { $inc: { starRating: 1 } }
      );
      res.json(updatedRating);
    } catch (err) {
      res.json({ message: err });
    }
  });
  }


  
}
