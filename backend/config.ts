import dotenv from 'dotenv';

dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRETE_KEY_ONE: string | undefined;
  public SECRETE_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN;
    this.NODE_ENV = process.env.NODE_ENV;
    this.SECRETE_KEY_ONE = process.env.SECRETE_KEY_ONE;
    this.SECRETE_KEY_TWO = process.env.SECRETE_KEY_TWO;
    this.CLIENT_URL = process.env.CLIENT_URL;
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined`);
      }
    }
  }
}
export const config = new Config();
