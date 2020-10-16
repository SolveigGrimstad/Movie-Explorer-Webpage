import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose';
import environment from "../environment";
import { TestRoutes } from "../routes/test_routes";
import {CommonRoutes} from "../routes/common_routes"; 
import {MovieRoutes} from "../routes/movie_routes"; 

class App {
   public app: express.Application;
   public mongoUrl: string = 'mongodb://gruppe42:hesterbest123@it2810-42.idi.ntnu.no:27017/moviedatabase';
   private test_routes: TestRoutes = new TestRoutes();
   private common_routes: CommonRoutes = new CommonRoutes(); 
   private movie_routes: MovieRoutes = new MovieRoutes(); 

   constructor() {
      this.app = express();
      this.config();
      this.mongoSetup();
      this.test_routes.route(this.app);
      this.common_routes.route(this.app); 
      this.movie_routes.route(this.app)
   }
private config(): void {
      // support application/json type post data
      this.app.use(bodyParser.json());
      //support application/x-www-form-urlencoded post data
      this.app.use(bodyParser.urlencoded({ extended: false }));
   }

   private mongoSetup(): void {
      mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
   }
}
export default new App().app;