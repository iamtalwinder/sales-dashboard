'use client';

import { ApexOptions } from 'apexcharts';
import { ChartType } from '@dashboard/config';
import dynamic from 'next/dynamic';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
interface ChartProps {
  options: ApexOptions;
  series: ApexAxisChartSeries;
  type?: ChartType;
}

export const Chart: React.FC<ChartProps> = ({ options, series, type = ChartType.AREA }) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default sm:px-7.5 xl:col-span-8">
      <div>
        <div className="-ml-5">
          <ReactApexChart
            options={options}
            series={series}
            type={type}
            height={350}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};