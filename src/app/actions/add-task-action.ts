'use server';

import { postData } from '@/utils/functions';
import { revalidatePath } from 'next/cache';

export const addTask = async (
  url: string,
  formData: {
    title: string;
    description: string;
  },
  authToken: string
) => {
  try {
    const { data } = await postData(url, formData, authToken);
    revalidatePath('/tasks');
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
