import { NextRequest, NextResponse } from 'next/server';
import { dbConnection } from '@dashboard/db';
import { salesDataService, salesQuerySchema } from '@dashboard/modules/sales';
import { logger } from '@dashboard/lib';

export async function GET(req: NextRequest) {
  try {
    await dbConnection;

    const url = new URL(req.url);
    const query = Object.fromEntries(url.searchParams.entries());

    const validation = salesQuerySchema.safeParse(query);
    if (!validation.success) {
      return NextResponse.json({ errors: validation.error.errors }, { status: 400 });
    }

    const { start, end } = validation.data;

    const salesData = await salesDataService.getSalesDataInRange(start, end);
    return NextResponse.json(salesData, { status: 200 });

  } catch (error: any) {
    logger.error('Error fetching sales data: %o', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
