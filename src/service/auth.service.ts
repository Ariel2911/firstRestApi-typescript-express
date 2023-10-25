import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import userModel from "../models/user.model";
import { encrypt, verified } from "../utils/bcrypt.handle";

const registeNewUser = async ({name, description, email, password}: User) => {

  const checkIs = await userModel.findOne({email});
  if(checkIs) return 'ALDEARY_USER';

  const passEncrypt = await encrypt(password);

  const register = await userModel.create({name, description, email, password: passEncrypt});

  return register;

}; 

const loginUser = async ({email, password}: Auth) => {
  
  const user = await userModel.findOne({email});
  if(!user) return 'NOT_EXIST';

  const isCorrect = await verified(password, user.password);

  if(!isCorrect) return 'PASSWORD_INCORRECT';

  return user;

};

export { registeNewUser, loginUser };

