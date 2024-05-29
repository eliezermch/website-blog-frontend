import RegisterForm from '@/components/register-form';
import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';

const Login = async () => {
  const session = await getSession();

  if (session !== null) {
    redirect('/');
  }

  return (
    <main className="w-full h-full flex justify-center items-center mt-[160px]">
      <RegisterForm />
    </main>
  );
};

export default Login;
