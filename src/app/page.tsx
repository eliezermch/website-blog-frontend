import { getSession } from '@/utils/session';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  // const session = await getSession();

  // if (session === null) {
  //   redirect('/login');
  // }

  return (
    <>
      <main className="dark flex flex-col justify-start items-center w-full h-auto relative px-[24px] lg:px-[100px] xl:px-[140px] z-10">
        <section className="w-full flex justify-center py-12 sm:py-24 md:py-32 md:pt-24">
          <div className="container ">
            <div className="grid gap-6 justify-items-center lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to My Space
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Unleash your productivity and express yourself with our all-in-one platform.
                  </p>
                </div>
                <div className="flex flex-row gap-2">
                  <Button as={Link} color="primary" href="/login">
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="w-[263px] h-[250px] mt-36 lg:w-[363px] lg:h-[350px] relative">
                <div className="ear ear--left"></div>
                <div className="ear ear--right"></div>
                <div className="face">
                  <div className="eye eye--left">
                    <div className="eye-pupil"></div>
                  </div>
                  <div className="eye eye--right">
                    <div className="eye-pupil"></div>
                  </div>
                  <div className="muzzle"></div>
                </div>
              </div>
              {/* <Image
                src="/images/hero-image-241707.webp"
                width={1920}
                height={1080}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square shadow-md"
              /> */}
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 sm:py-24 md:py-32">
          <div className="container ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Manage Your Tasks Effortlessly</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  {"Stay on top of your to-do's with our intuitive task management features."}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/hero-image-241707.webp"
                width={1920}
                height={1080}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last lg:aspect-square shadow-md"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Create Tasks</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Easily add new tasks with due dates and descriptions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Track Progress</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Monitor the status of your tasks and stay on top of your work.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Prioritize</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Organize your tasks by priority to ensure you complete the most important ones first.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full flex justify-center py-12 sm:py-24 md:py-32">
          <div className="container ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Express Yourself with Your Personal Blog
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Share your thoughts, experiences, and ideas with the world through your own blog.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Create Blog Posts</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Easily write and publish your personal blog posts.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customize Design</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Personalize the look and feel of your blog to match your style.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Share with Others</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Invite friends and family to read and engage with your blog.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/images/task-image-241707.webp"
                width={2480}
                height={3303}
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
