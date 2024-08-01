import { ICategory } from './category.interface';

export interface ISalesData {
  month: string;
  total: number;
  categories: ICategory;
}
