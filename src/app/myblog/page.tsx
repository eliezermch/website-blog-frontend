import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';

const MyBlog = async () => {
  const session = await getSession();

  if (session === null) {
    redirect('/login');
  }

  return <div>MyBlog</div>;
};

export default MyBlog;
