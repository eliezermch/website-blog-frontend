import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();

  if (session === null) {
    redirect('/login');
  }

  return (
    <main className="dark">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
