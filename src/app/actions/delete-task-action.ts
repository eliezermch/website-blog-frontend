'use server';

import { deleteData } from '@/utils/functions';
import { revalidatePath } from 'next/cache';

export const deleteTask = async (url: string, id: number, authToken: string) => {
  try {
    if (!id || !authToken) return;

    const { status, error } = await deleteData(url, id, authToken);

    revalidatePath('/tasks');
    return { status: status, error: error };
  } catch (error) {
    console.error('Error deleting post:', error);
  }
};
