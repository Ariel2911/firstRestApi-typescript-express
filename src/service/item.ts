import { Car } from "../interfaces/car.interface";
import ItemModel from "../models/item";

const insertCard = async (item: Car) => {

  const responseInsert = await ItemModel.create(item);

  return responseInsert;

};

export { insertCard };
