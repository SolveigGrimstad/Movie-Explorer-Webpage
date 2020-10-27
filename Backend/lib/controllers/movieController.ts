import { Request, Response } from "express";
import {
  insufficientParameters,
  mongoError,
  successResponse,
  failureResponse,
} from "../modules/common/service";
import { IMovie } from "../modules/movies/model";
import MovieService from "../modules/movies/service";
import e = require("express");

export class movieController {
  private movie_service: MovieService = new MovieService();

  public get_movie(req: Request, res: Response) {
    this.movie_service.filterMovie({}, (err: any, movie_data: IMovie) => {
      if (err) {
        mongoError(err, res);
      } else {
        successResponse("get movie successfull", movie_data, res);
      }
    });
  }

  public search_movies(req: Request, res: Response) {
      const title = req.params.title;
      const movie_search = { Title : {$regex: title, $options: "i"}};
      this.movie_service.movieSearch(movie_search, (err: any, title_data: IMovie) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("get title successfull", title_data, res);
        }
      });
     
  }
}
