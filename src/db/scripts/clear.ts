import 'dotenv/config';

import { dbConnection } from '@dashboard/db';
import { logger } from '@dashboard/lib';
import { SalesDataModel } from '@dashboard/modules/sales';

const clearData = async () => {
  await dbConnection;

  try {
    await SalesDataModel.deleteMany({});
    logger.info('All data cleared successfully');
  } catch (error) {
    logger.error('Error clearing data: %o', error);
  }
};

clearData().then(() => process.exit());
