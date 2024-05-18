import ToDoList from '@/components/todo-list';
import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';

const ToDoPage = async () => {
  const session = await getSession();

  if (session === null) {
    redirect('/login');
  }

  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center gap-[32px] md:px-[24px] lg:px-[0] md:gap-[130px] md:flex-row mt-[60px]">
        <ToDoList data={session} title="To-Do List" />
        <ToDoList data={session} title="Done Tasks" />
      </div>
    </main>
  );
};

export default ToDoPage;
