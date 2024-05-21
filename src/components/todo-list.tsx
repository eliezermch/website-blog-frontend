import { Session, Task } from '@/types/session-model';
import TaskCard from './task-card';
import { ScrollShadow } from '@nextui-org/react';
import { NewTaskButton } from './new-task-button';

interface Props {
  title: string;
  data: Session;
  tasks: Task[] | any;
}

const ToDoList = ({ title, data, tasks }: Props) => {
  return (
    <div className=" w-full max-w-[420px] min-w-[280px] h-[540px] p-[1.2rem] bg-zinc-800 rounded-small shadow-card transition-all duration-[0.2s] ease-in-out">
      <ScrollShadow hideScrollBar className="w-full h-full">
        <div className="w-full h-full">
          <div className="w-full flex justify-between mb-[12px]">
            <h2 className="">{title}</h2>

            <NewTaskButton data={data} />
          </div>

          {tasks?.map((task: any) => (
            <TaskCard
              title={task.title}
              session={data}
              description={task.description}
              done={task.done}
              id={task.id}
              key={task.id}
            />
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
};

export default ToDoList;
