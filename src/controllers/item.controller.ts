import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { deleteCar, getCar, getCars, insertCard, updateCar } from "../service/item";

const getItem = async ({params}: Request, res: Response) => {
  try {

    const {id} = params;

    const responseItem = await getCar(id) || "NOT_FOUND";
    res.send(responseItem);

  }catch(e) {
    handleHttp(res, 'ERROR_GET_ITEM', e)
  }
};

const getItems = async (req: Request, res: Response) => {
  try {

    const responseItem = await getCars();
    res.send(responseItem)

  }catch(e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e)
  }
};

const updateItem = async ({params, body}: Request, res: Response) => {
  try {

    const {id} = params;
    const responseItem = await updateCar(id, body);
    res.send(responseItem);

  }catch(e) {
    handleHttp(res, 'ERROR_UPDATE_ITEM', e)
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {

    const responseItem = await insertCard(body);
    res.send(responseItem);

  }catch(e) {
    handleHttp(res, 'ERROR_POST_ITEM', e)
  }
};

const deleteItem = async ({params}: Request, res: Response) => {
  try {

    const {id} = params;
    const responseItem = await deleteCar(id);
    res.send(responseItem);  

  }catch(e) {
    handleHttp(res, 'ERROR_DELETE_ITEM', e)
  }
};

export { getItem, getItems, updateItem, postItem, deleteItem }