import Dropzone from '@/components/dropzone';
import { getSession } from '@/utils/session';
import { Card, CardHeader } from '@nextui-org/react';
import { redirect } from 'next/navigation';
// import { AddShareBlog } from '../actions/add-share-blog';

const ShareBlog = async () => {
  const session = await getSession();

  if (session === null) {
    redirect('/login');
  }

  return (
    <main className="min-h-[84vh] w-full flex flex-col items-center px-6">
      <div className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mt-10">
        <h1>Your Shared World</h1>
      </div>
      <Card className="w-full max-w-5xl p-6 mt-8 bg-zinc-900/70 rounded-lg shadow-card">
        <CardHeader>
          <p>Share your thoughts with the world!</p>
        </CardHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Dropzone />
          </div>
        </div>
      </Card>
    </main>
  );
};

export default ShareBlog;
