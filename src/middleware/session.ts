import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

  try {

    const jwtByUser = req.headers.authorization || '';

    const jwt = jwtByUser.split(' ').pop();

    const isUser: string | JwtPayload = verifyToken(`${jwt}`);

    if(!isUser) {
      res.status(401);
      res.send("DO_NOT_HAVE_A_VALID_SESSION")
    }else {      
      req.user = isUser
    };

    next();
    
  } catch (e) {
    res.status(400);
    res.send('SESSION_NOT_VALID');
  };
  
};

export { checkJwt };