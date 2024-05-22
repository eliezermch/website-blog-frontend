'use server';

import { markAsDoneData, updateData } from '@/utils/functions';
import { revalidatePath } from 'next/cache';

export const updateTask = async (
  url: string,
  data: {
    title: string;
    description: string;
  },
  authToken: string
) => {
  try {
    const res = await updateData(url, data, authToken);
    console.log('🚀 ~ res:', res);
    revalidatePath('/tasks');
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
