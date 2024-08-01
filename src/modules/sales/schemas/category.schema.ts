import { Schema } from 'mongoose';

export const CategorySchema: Schema = new Schema({
  electronics: { type: Number, required: true },
  clothing: { type: Number, required: true },
  books: { type: Number, required: true },
  home: { type: Number, required: true },
}, { _id: false });
