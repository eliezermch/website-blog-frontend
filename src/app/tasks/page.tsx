import ToDoList from '@/components/todo-list';
import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';
import { fetchTasks } from '../actions/fetch-tasks-action';
import { Task } from '@/types/session-model';

const TASKS_API = 'http://127.0.0.1:8000/api/tasks/';

export const dynamic = 'force-dynamic';

const ToDoPage = async () => {
  const session = await getSession();

  if (session === null) {
    redirect('/login');
  }

  const data = await fetchTasks(TASKS_API, session.user.token);

  function filterTasks(data: Task[], doneValue: boolean) {
    return data.filter((task: Task) => task.done === doneValue);
  }

  const completedTasks = filterTasks(data, true);

  const incompleteTasks = filterTasks(data, false);

  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center gap-[32px] md:px-[24px] lg:px-[0] md:gap-[130px] md:flex-row mt-[60px]">
        <ToDoList data={session} tasks={incompleteTasks} title="To-Do List" />
        <ToDoList data={session} tasks={completedTasks} title="Done Tasks" />
      </div>
    </main>
  );
};

export default ToDoPage;
