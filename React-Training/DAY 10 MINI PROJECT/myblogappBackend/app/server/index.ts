import express from 'express';
import bodyParser from 'body-parser';
const cors = require('cors');
import db from '../database/conn';
import routes from '../routes/index';

class Server {
  port: any;
  app: any;
  db: any;

  constructor() {
    this.port = 3001;
    this.app = express();
    this.db = db;
  }

  config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors()); 
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
