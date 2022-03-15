import { Request, Response } from "express";
import { CategoriesRepository } from "../../cars/repositories/implementations/CategoriesRepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryRepositoryUseCase: CreateCategoryUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoryRepositoryUseCase.execute({ name, description });

    return response.status(201).json({
      messeger: "Categoria criada com sucesso!",
    });
  }
}

export { CreateCategoryController };
