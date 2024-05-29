import { Session, Task } from '@/types/session-model';
import ToDoList from './todo-list';

interface Props {
  session: Session;
  incompleteTasks: Task[];
  completedTasks: Task[];
}

const ListContainer = ({ session, incompleteTasks, completedTasks }: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-[32px] md:px-[24px] lg:px-[0] md:gap-[130px] md:flex-row mt-[60px]">
      <ToDoList id="active-list" data={session} tasks={incompleteTasks} title="To-Do List" />
      <ToDoList id="completed-list" data={session} tasks={completedTasks} title="Done Tasks" />
    </div>
  );
};

export default ListContainer;
