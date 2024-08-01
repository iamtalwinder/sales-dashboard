import { model, models } from 'mongoose';
import { SALES_DATA_MODEL } from '../constants';
import { ISalesData } from '../interfaces';
import { SalesDataSchema } from '../schemas';

export type ISalesDataDocument = ISalesData & Document;

export const SalesDataModel = models?.[SALES_DATA_MODEL] 
  ? model<ISalesDataDocument>(SALES_DATA_MODEL)
  : model<ISalesDataDocument>(SALES_DATA_MODEL, SalesDataSchema);