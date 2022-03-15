import { SearchCategoryUseCase } from "./SearchCategoryUseCase";
import { SearchCategoryController } from "./SearchCategoryController";
import { CategoriesRepository } from "../../cars/repositories/implementations/CategoriesRepository";

const categoryRepository = CategoriesRepository.getInstance();
const searchCategoryUseCase = new SearchCategoryUseCase(categoryRepository);
const searchCategoryController = new SearchCategoryController(
  searchCategoryUseCase
);

export { searchCategoryController };
