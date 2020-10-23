import { Request, Response } from 'express';
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/service';
import { IMovie } from '../modules/movies/model';
import MovieService from '../modules/movies/service';
import e = require('express');

export class movieController {

    private movie_service: MovieService = new MovieService();


    public get_movie(req: Request, res: Response) {
        if (req.params.search) {
            const movie_filter = { title: req.params.search };
            this.movie_service.filterMovie({}, (err: any, movie_data: IMovie) => {
                if (err) {
                    mongoError(err, res);
                } else {
                    successResponse('get movie successfull', movie_data, res);
                }
            });
            
        } else {
            insufficientParameters(res);
        }
    }


}
