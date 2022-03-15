import { Category } from "../../cars/model/Category";
import { ICategoriesRepository } from "../../cars/repositories/interface/ICategoriesRepository";

class SearchCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  handle(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { SearchCategoryUseCase };
