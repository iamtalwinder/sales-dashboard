import { ISalesData } from '@dashboard/modules/sales';

export const fetchSalesData = async (start: string, end: string): Promise<ISalesData[]> => {
  const response = await fetch(`/api/sales?start=${start}&end=${end}`);
  const data = await response.json();
  return data;
};
