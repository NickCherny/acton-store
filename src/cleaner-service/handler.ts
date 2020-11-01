import 'source-map-support/register';

import mockData from './__mock__/data';
import { HttpEventRequest, Cleaner } from './types';


export const getCleanerList = async () => {
  const data = await Promise.resolve(mockData);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}

export const getCleanerById = async (event: HttpEventRequest<{ cleanerId: string }>) => {
  try {
    const { cleanerId } = event.pathParameters!;
    const currentCleaner = mockData.find(({ id }: Cleaner) => id === cleanerId);
    const targetCleaner = await Promise.resolve(currentCleaner);

    return {
      statusCode: 200,
      body: JSON.stringify(targetCleaner)
    }
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify(e)
    }
  }
}
