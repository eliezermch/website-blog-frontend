'use server';

import { markAsDoneData } from '@/utils/functions';
import { revalidatePath } from 'next/cache';

export const markAsDoneTask = async (url: string, authToken: string) => {
  try {
    const res = await markAsDoneData(url, authToken);
    revalidatePath('/tasks');
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
