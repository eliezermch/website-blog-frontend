import ToDoList from '@/components/todo-list';
import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';
import { fetchTasks } from '../actions/fetch-tasks-action';

const TASKS_API = 'http://127.0.0.1:8000/api/tasks/';

const ToDoPage = async () => {
  const session = await getSession();
  const data = await fetchTasks(TASKS_API, session.user.token);

  if (session === null) {
    redirect('/login');
  }

  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center gap-[32px] md:px-[24px] lg:px-[0] md:gap-[130px] md:flex-row mt-[60px]">
        <ToDoList data={session} tasks={data} title="To-Do List" />
        <ToDoList data={session} tasks={data} title="Done Tasks" />
      </div>
    </main>
  );
};

export default ToDoPage;
