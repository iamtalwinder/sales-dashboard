import { env } from '@dashboard/env';
import { ISalesData } from '@dashboard/modules/sales';

const SALES_API = `${env.NEXT_PUBLIC_API_BASE_URL}/api/sales`;

export const fetchSalesData = async (start: string, end: string): Promise<ISalesData[]> => {
  const response = await fetch(`${SALES_API}?start=${start}&end=${end}`);
  const data = await response.json();
  return data;
};
