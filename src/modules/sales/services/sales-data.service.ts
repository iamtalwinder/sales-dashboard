import { ISalesData } from '../interfaces';
import { SalesDataModel } from '../models';

class SalesDataService {
  public async getSalesDataInRange(start?: string, end?: string): Promise<ISalesData[]> {
    const queryObj = this.buildQueryObject(start, end);
    const salesDataDocuments = await SalesDataModel.find(queryObj);

    return salesDataDocuments.map(doc => doc.toObject());
  }

  private buildQueryObject(start?: string, end?: string) {
    const queryObj: any = {};
    if (start) {
      queryObj.month = { $gte: start };
    }
    if (end) {
      queryObj.month = queryObj.month ? { ...queryObj.month, $lte: end } : { $lte: end };
    }
    return queryObj;
  }
}

export const salesDataService = new SalesDataService();
