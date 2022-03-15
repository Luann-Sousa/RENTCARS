import { ImportCategoryController } from "../importCategory/ImportCategoryController";
import { ImportCategoryUseCase } from "../importCategory/ImportCategoryUseCase";
import { CategoriesRepository } from "../../cars/repositories/implementations/CategoriesRepository";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCae = new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCae
);

export { importCategoryController };
