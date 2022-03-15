import { ICategoriesRepository } from "../../cars/repositories/interface/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  async execute({ name, description }: IRequest) {
    const categoryAllExists = this.categoriesRepository.findByName(name);
    //verificando se tem essa categoria
    if (!categoryAllExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({
      name,
      description,
    });
  }
}

export { CreateCategoryUseCase };
