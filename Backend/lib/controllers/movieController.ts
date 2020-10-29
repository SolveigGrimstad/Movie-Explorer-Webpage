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
import { ModificationNote } from "modules/common/model";

export class movieController {
  private movie_service: MovieService = new MovieService();

  public get_movie(req: Request, res: Response) {
    /*if (req.params.id) {
            const movie_filter = { _id: req.params.id };*/
    this.movie_service.filterUser({}, (err: any, movie_data: IMovie) => {
      if (err) {
        mongoError(err, res);
      } else {
        successResponse("get movie successfull", movie_data, res);
      }
    });

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
/*
  
  public update_likes(req: Request, res: Response){
    if(req.params.id){
      const update_likes = {_id: req.params.id};
      this.movie_service.filterUser(update_likes, (err: any, movie_data:IMovie) =>{
        if(err){
          mongoError(err, res);
        }
        else if(movie_data){
          movie_data.modification_notes.push({
            modified_on: new Date(Date.now()),
            modified_by: null,
            modification_note: 'Likes data updated'});

          const movie_params: IMovie = {
            _id : req.params.id,
            starRatings: req.body.starRating ? req.body.starRating: movie_data.starRatings,
          }
          }
        });
      }
    }

*/
/*
public update_likes(req: Request, res: Response) {
  if (req.params.id &&
      req.body.starRating) {
      const movie_filter = { _id: req.params.id };
      this.movie_service.filterUser(movie_filter, (err: any, movie_data: IMovie) => {
          if (err) {
              mongoError(err, res);
          } else if (movie_data) {
              movie_data.modification_notes.push({
                  modified_on: new Date(Date.now()),
                  modified_by: null,
                  modification_note: 'User data updated'
              });
              const user_params: IMovie = {
                  _id: req.params.id,
                  starRating: req.body.starRating ? req.body.starRating: movie_data.starRating,

                  
              };
              this.movie_service.filterUser(user_params, (err: any) => {
                  if (err) {
                      mongoError(err, res);
                  } else {
                      successResponse('update user successfull', null, res);
                  }
              });
          } else {
              failureResponse('invalid user', null, res);
          }
      });
  } else {
      insufficientParameters(res);
  }
}
          
         */ 

}
