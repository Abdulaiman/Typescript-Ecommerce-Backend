declare namespace Express {
  interface Request {
    user?: import("../../model/users-models").default;
  }
}
