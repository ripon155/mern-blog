import express, { Express } from 'express';
import { BlogServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabase';
import { config } from '@root/config';

class Application {
  public initialize(): void {
    this.loadConfig();
    //connect db
    databaseConnection();

    const app: Express = express();
    const server: BlogServer = new BlogServer(app);

    // start server
    server.start();
  }

  public loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();
application.initialize();
