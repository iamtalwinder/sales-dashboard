'use client';

import React, { useEffect, useState } from 'react';
import { fetchSalesData } from '@dashboard/facade/sales';
import { ISalesData } from '@dashboard/modules/sales';
import { MonthlySalesChart } from './monthly-sales-chart';
import { SummaryChart } from './summary-chart';

export const SalesChart: React.FC = () => {
  const [salesData, setSalesData] = useState<ISalesData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSalesData('2023-01', '2023-12');
        setSalesData(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch sales data. Please try again later.');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <MonthlySalesChart salesData={salesData} />
      <SummaryChart salesData={salesData} />
    </>
  );
};
