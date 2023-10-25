import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { loginUser, registeNewUser } from "../service/auth.service";

const registerController = async ({body}: Request, res: Response) => {

  try {

    const response = await registeNewUser(body);
    res.send(response);

  } catch (e) {
    handleHttp(res, "ERROR_", e);
  }

};

const loginController = async ({body}: Request, res: Response) => {

  try {    
    
    const response = await loginUser(body);

    if(response === 'PASSWORD_INCORRECT') {res.status(403)}
    res.send(response);

  } catch (e) {
    handleHttp(res, "ERROR_", e);
  }

};

export { registerController, loginController };

