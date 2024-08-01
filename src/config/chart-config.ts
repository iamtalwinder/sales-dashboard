import { ApexOptions } from 'apexcharts';
import { DEFAULT_CHART_MAX } from './constants';
import { ChartType } from './enums';

export interface IChartConfig {
  colors: string[];
  categories: string[];
  chartTitle: string;
  xAxisTitle: string;
  yAxisTitle: string;
  max?: number;
  charType?: ChartType;
}

export const generateChartOptions = ({
  colors,
  categories,
  chartTitle,
  xAxisTitle,
  yAxisTitle,
  max = DEFAULT_CHART_MAX,
  charType = ChartType.AREA
}: IChartConfig): ApexOptions => ({
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  colors,
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: charType,
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  title: {
    text: chartTitle,
    align: 'left'
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: colors,
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    title: {
      text: xAxisTitle 
    },
    type: 'category',
    categories,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      text: yAxisTitle,
    },
    min: 0,
    max,
  }
});
