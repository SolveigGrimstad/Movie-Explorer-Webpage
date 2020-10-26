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
    if (req.query.filter) {
      let filters = req.query.filter.toString().split(",");
      this.movie_service.filterUser(filters, (err: any, movie_data: IMovie) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("get movie successfull", movie_data, res);
        }
      });
    } else {
      //console.log("without filter");
      this.movie_service.filterUser([], (err: any, movie_data: IMovie) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("get movie successfull", movie_data, res);
        }
      });
    }

    /*
        } else {
            insufficientParameters(res);
        }*/
  }

  public get_id(req: Request, res: Response) {
    if (req.params.id) {
      const movie_filter1 = { _id: req.params.id };
      this.movie_service.filterUser1({}, (err: any, id_data: IMovie) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse("get id successfull", id_data, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }
}
