import express, { Express } from 'express';
import { BlogServer } from './setupServer';

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: BlogServer = new BlogServer(app);

    // start server
    server.start();
  }
}

const application: Application = new Application();
application.initialize();
