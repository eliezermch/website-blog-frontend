import { getSession } from '@/utils/session';
import { Card, CardHeader, Image, Link } from '@nextui-org/react';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getSession();

  if (session === null) {
    redirect('/login');
  }

  return (
    <main className="dark flex flex-col justify-start items-center w-full">
      <div className="mt-[60px]">
        <h1 className="text-[50px]">Welcome to your Space</h1>
      </div>

      <div className="bg-transparent relative w-[80%] h-[60%] mt-[60px] gap-2 grid grid-cols-12 gap-x-10">
        <Card as={Link} href={'/profile'} shadow="md" isPressable className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-[#45D483] uppercase font-bold">What to watch</p>
            <h4 className="text-white font-medium text-large">Stream the Acme event</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-4.jpeg"
          />
        </Card>
        <Card as={Link} href={'/tasks'} shadow="md" isPressable className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-[#45D483] uppercase font-bold">Plant a tree</p>
            <h4 className="text-white font-medium text-large">Contribute to the planet</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-3.jpeg"
          />
        </Card>
        <Card as={Link} href={'/myblog'} shadow="md" isPressable className="col-span-12 sm:col-span-4 h-[400px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-[#45D483] uppercase font-bold">Supercharged</p>
            <h4 className="text-white font-medium text-large">Creates beauty like a beast</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="https://nextui.org/images/card-example-2.jpeg"
          />
        </Card>
      </div>
    </main>
  );
}
