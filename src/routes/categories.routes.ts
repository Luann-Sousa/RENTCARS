import { Router, Request, Response } from "express";
import multer from "multer";
import { CategoriesRepository } from "../modules/cars/repositories/implementations/CategoriesRepository";
import { createCategoryController } from "../modules/useCases/createCategory";
import { importCategoryController } from "../modules/useCases/importCategory";

import { Category } from "../modules/cars/model/Category";
import { searchCategoryController } from "../modules/useCases/SearchCategory";

const routesCategories = Router();

const categoriesRepository = new CategoriesRepository();

const categories: Category[] = [];

const upload = multer({
  dest: "./tmp",
});
//cadastro de categorias.
routesCategories.post("/", (request: Request, response: Response) => {
  createCategoryController.handle(request, response);
});

routesCategories.get("/", (request: Request, response: Response) => {
  return searchCategoryController.handle(request, response);
});

routesCategories.post(
  "/import",
  upload.single("file"),
  (request: Request, response: Response) => {
    return importCategoryController.handle(request, response);
  }
);

export { routesCategories };
