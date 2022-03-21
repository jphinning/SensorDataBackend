declare namespace Express {
  export interface Request {
    userToken: {
      id: number;
      email: string;
    };
  }
}
