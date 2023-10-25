import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const userSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "No hay descripción"
    },
    email:{
      type: String,
      required: true,
      unique: true,
    },
    password:{
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const userModel = model('users', userSchema);

export default userModel;
