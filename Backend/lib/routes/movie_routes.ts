import { Application, Request, Response } from "express";
import { movieController } from "../controllers/movieController";

export class MovieRoutes {
  private movie_controller: movieController = new movieController();

  public route(app: Application) {
    app.get("/api/movies/search/:title/:page/:sort", (req: Request, res: Response) => {
      this.movie_controller.get_movie(req, res);
    });


    app.get("/api/search/:title/:page/", (req: Request, res: Response) => {
      this.movie_controller.search_movies(req, res);
    });

    app.get("/api/sort/:sort/", (req: Request, res: Response) => {
      const sort = req.params.sort;
      this.movie_controller.sort_movies(req, res);
    });
    
  }
}
