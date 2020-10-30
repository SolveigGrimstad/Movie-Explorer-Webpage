import { Request, Response } from "express";
import { mongoError, successResponse } from "../modules/common/service";
import { IMovie } from "../modules/movies/model";
import MovieService from "../modules/movies/service";
import e = require("express");

export class movieController {
  private movie_service: MovieService = new MovieService();

  public get_movie(req: Request, res: Response) {
    const page = Math.max(0, parseInt(req.params.page));
    const title = req.query.title;
    const movie_search = { Title: { $regex: title, $options: "i" } };
    //const likes = req.query.starRating;

    if (true) {
      //when its a filter
      console.log("hei");
      let filters = req.query.filter.toString().split(",");
      this.movie_service.actionMovie(
        title,
        filters,
        req,
        page,
        // likes,
        (err: any, movie_data: IMovie) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse("get movie successfull", movie_data, res);
          }
        }
      );
    } else {
      //no filter, empty list of filters
      console.log("hoppa over");
      this.movie_service.actionMovie(
        title,
        [],
        req,
        page,
        //likes,
        (err: any, movie_data: IMovie) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse("get movie successfull", movie_data, res);
          }
        }
      );
    }
  }

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
}
