import { getSession } from '@/utils/session';
import { redirect } from 'next/navigation';
import { fetchTasks } from '../actions/fetch-tasks-action';
import { Task } from '@/types/session-model';
import ListContainer from '@/components/list-container';

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
      <ListContainer session={session} incompleteTasks={incompleteTasks} completedTasks={completedTasks} />
    </main>
  );
};

export default ToDoPage;
