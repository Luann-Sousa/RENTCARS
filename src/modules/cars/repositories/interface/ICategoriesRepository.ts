//cria contrato da classe de Category
//quando pensamos em contrato logo vem ao nome interface  por que na interface agente tem a definição do que uma classe precisar ter ao implementa nosssa interface
//por que isso ?
//

import { Category } from "../../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  list(): Category[];
  findByName(name: string): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
