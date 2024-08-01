import { Schema } from 'mongoose';
import { CategorySchema } from './category.schema';

export const SalesDataSchema: Schema = new Schema({
  month: { type: String, required: true },
  total: { type: Number, required: true },
  categories: { type: CategorySchema, required: true },
});