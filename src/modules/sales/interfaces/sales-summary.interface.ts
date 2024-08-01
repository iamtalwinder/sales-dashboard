import { ICategory } from './category.interface';

export interface ISalesSummary {
  totalRevenue: number;
  categoriesRevenue: ICategory;
  categories: string[];
}
