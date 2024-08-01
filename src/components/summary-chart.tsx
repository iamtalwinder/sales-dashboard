'use client';

import React from 'react';
import { ISalesData, SalesConverter } from '@dashboard/modules/sales';
import { ChartTitles, ChartType, COLORS, generateChartOptions, MONTHS } from '@dashboard/config';
import { Chart } from './chart';

interface SummaryChartProps {
  salesData: ISalesData[];
}

export const SummaryChart: React.FC<SummaryChartProps> = ({salesData}) => {
  const summary = SalesConverter.toSummary(salesData);
  const series = SalesConverter.summaryToApexSeries(ChartTitles.TOTAL_SALES, summary);
  
  const options = generateChartOptions({
    colors: COLORS, 
    categories: summary.categories, 
    chartTitle: ChartTitles.SALES_SUMMARY, 
    xAxisTitle: ChartTitles.CATEGORIES, 
    yAxisTitle: ChartTitles.TOTAL_SALES,
    charType: ChartType.BAR,
    max: Math.max(...series[0].data as number[])
  });

  return (
    <div className='p-2 mt-10 md:p-6 bg-gray-800 rounded-lg w-full'>
      <Chart options={options} series={series} type={ChartType.BAR}/>
    </div>
  );
};