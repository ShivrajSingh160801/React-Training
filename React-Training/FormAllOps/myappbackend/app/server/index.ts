import express from 'express';
import bodyParser from 'body-parser';
import db from '../db/conn'
import routes from '../route/index'
const cors = require ('cors')

class Server {
  port: Number;
  app: express.Application;
  db: any; 

  constructor() {
    this.port = 3001;
    this.app = express();
    this.db = db; 
  }

  config() {
    this.app.use(cors()); 
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  start() {
    this.config();
    this.setupRoutes();
    this.listen();
  }

  setupRoutes() {
    this.app.use(routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App is running on port ${this.port}`);
    });
  }
}

export default Server;
