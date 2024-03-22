import express, { Express } from 'express';
import { BlogServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabase';

class Application {
  public initialize(): void {
    //connect db
    databaseConnection();

    const app: Express = express();
    const server: BlogServer = new BlogServer(app);

    // start server
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
