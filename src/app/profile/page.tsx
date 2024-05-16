import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';

const Profile = async () => {
  const session = await getSession();

  if (session === null) {
    redirect('/login');
  }

  return <div>Profile</div>;
};

export default Profile;
