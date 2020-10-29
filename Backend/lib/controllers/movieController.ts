import { Request, Response } from "express";
import { mongoError, successResponse } from "../modules/common/service";
import { IMovie } from "../modules/movies/model";
import MovieService from "../modules/movies/service";
import e = require("express");

export class movieController {
  private movie_service: MovieService = new MovieService();

  public get_movie(req: Request, res: Response) {
    const page = Math.max(0, parseInt(req.params.page));
    //const title = req.params.title;


    if (req.query.filter) {
      let filters = req.query.filter.toString().split(",");
      this.movie_service.filterMovie(
        filters,
        page,
        (err: any, movie_data: IMovie) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse("get movie successfull", movie_data, res);
          }
        }
      );
    } /*else if (req.query.sort) {
      const sort = req.params.sort; 
      this.movie_service.sortMovies(sort, (err: any, title_data: IMovie) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("get title successfull", title_data, res);
        }
      });
    }

    }*/else {
      //console.log("without filter");
      this.movie_service.filterMovie(
        [],
        page,
        (err: any, movie_data: IMovie) => {
          if (err) {
            mongoError(err, res);
          } else {
            successResponse("get movie successfull", movie_data, res);
          }
        }
      );
    }

    /*
        } else {
            insufficientParameters(res);
        }*/
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

  public sort_movies(req: Request, res: Response) {
    const sort = req.params.sort; 

    this.movie_service.sortMovies(sort, (err: any, title_data: IMovie) => {
      if (err) {
        mongoError(err, res);
      } else {
        successResponse("get title successfull", title_data, res);
      }
    });
  }
}
