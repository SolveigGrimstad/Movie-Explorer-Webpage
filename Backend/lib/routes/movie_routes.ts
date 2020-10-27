import { Application, Request, Response } from "express";
import { movieController } from "../controllers/movieController";

export class MovieRoutes {
  private movie_controller: movieController = new movieController();

  public route(app: Application) {
    app.get("/api/movies", (req: Request, res: Response) => {
      this.movie_controller.get_movie(req, res);
    });
    /*
    app.get("/api/movieinfo/:id", (req: Request, res: Response) => {
      this.movie_controller.get_id(req, res);
    });
    */
    app.get("/api/search/:title", (req: Request, res: Response) => {
      this.movie_controller.search_movies(req, res);
    }); 
  
  }
}
