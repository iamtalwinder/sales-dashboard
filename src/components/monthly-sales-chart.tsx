'use client';

import React from 'react';
import { ISalesData, SalesConverter } from '@dashboard/modules/sales';
import { ChartTitles, ChartType, COLORS, generateChartOptions, MONTHS } from '@dashboard/config';
import { Chart } from './chart';

interface MonthlySalesChartProps {
  salesData: ISalesData[];
}

export const MonthlySalesChart: React.FC<MonthlySalesChartProps> = ({salesData}) => {
  const series = SalesConverter.dataToApexSeries(salesData);

  const options = generateChartOptions({
    colors: COLORS, 
    categories: MONTHS, 
    chartTitle: ChartTitles.MONTHLY_SALES, 
    xAxisTitle: ChartTitles.MONTH, 
    yAxisTitle: ChartTitles.SALES,
    charType: ChartType.AREA
  });

  return (
    <div className='p-2 md:p-6 bg-gray-800 rounded-lg w-full'>
      <Chart options={options} series={series} type={ChartType.AREA}/>
    </div>
  );
};