"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movieController = void 0;
const service_1 = require("../modules/common/service");
const service_2 = require("../modules/movies/service");
class movieController {
    constructor() {
        this.movie_service = new service_2.default();
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
                          starRatings: req.body.starRating ? req.body.starRating: movie_data.starRatings,
        
                          
                      };
                      this.movie_service.updateLikes(user_params, (err: any) => {
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
    get_movie(req, res) {
        /*if (req.params.id) {
                const movie_filter = { _id: req.params.id };*/
        this.movie_service.filterUser({}, (err, movie_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse("get movie successfull", movie_data, res);
            }
        });
        /*
            } else {
                insufficientParameters(res);
            }*/
    }
    get_id(req, res) {
        if (req.params.id) {
            const movie_filter1 = { _id: req.params.id };
            this.movie_service.filterUser1({}, (err, id_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse("get id successfull", id_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.movieController = movieController;
