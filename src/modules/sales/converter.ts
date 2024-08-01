import { ICategory, ISalesData, ISalesSummary } from './interfaces';

export class SalesConverter {
  static dataToApexSeries(data: ISalesData[]): ApexAxisChartSeries {
    if (!data.length) {
      return [];
    }
    const categories = Object.keys(data[0].categories);

    return categories.map(category => ({
      name: category,
      data: data.map(entry => entry.categories[category])
    }));
  }

  static summaryToApexSeries(name: string, summary: ISalesSummary): ApexAxisChartSeries {

    return [{
      name,
      data: Object.values(summary.categoriesRevenue)
    }]
  }

  static toSummary(salesData: ISalesData[]): ISalesSummary {
    const totalRevenue = salesData.reduce((acc, curr) => acc + curr.total, 0);
    const categories = new Set<string>();

    const categoriesRevenue = salesData.reduce((acc, curr) => {
      for (const category in curr.categories) {
        if (!category.startsWith('_')) {
          categories.add(category);
          acc[category] = (acc[category] || 0) + curr.categories[category];
        }
      }
      return acc;
    }, {} as ICategory);

    return { totalRevenue, categoriesRevenue, categories: Array.from(categories) };
  }
}
