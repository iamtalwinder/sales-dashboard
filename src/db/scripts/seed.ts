import 'dotenv/config';

import { dbConnection } from '@dashboard/db';
import { logger } from '@dashboard/lib';
import salesData from '@data/sales-data.json';
import { SalesDataModel } from '@dashboard/modules/sales';

const seedData = async () => {
  await dbConnection;

  try {
    await SalesDataModel.insertMany(salesData);
    logger.info('Seed data inserted successfully');
  } catch (error) {
    logger.error('Error inserting seed data: %o', error);
  }
};

seedData().then(() => process.exit());
