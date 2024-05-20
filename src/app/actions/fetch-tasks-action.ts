'use server';

import { getData } from '@/utils/functions';

const fetchTasks = async (url: string, authToken: string) => {
  try {
    const { data } = await getData(url, authToken);

    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return null;
  }
};

export { fetchTasks };
