import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
  user?: string | JwtPayload
}

const getItems = async (req: RequestExt, res: Response) => {
  try {
    
    res.send({
      data: "Si ves este mensaje, es que tu sesión fue iniciada",
      user: req.user
  });

  }catch(e) {
    handleHttp(res, 'ERROR_GET_ORDERS', e);
  };
  
};

export { getItems };
