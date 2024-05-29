import { Session, Task } from '@/types/session-model';
import TaskCard from './task-card';
import { Card, ScrollShadow } from '@nextui-org/react';
import { NewTaskButton } from './new-task-button';

interface Props {
  id: string;
  title: string;
  data: Session;
  tasks: Task[] | any;
}

const ToDoList = ({ title, data, tasks, id }: Props) => {
  return (
    <Card
      shadow="lg"
      className="w-full relative max-w-[420px] min-w-[280px] h-[540px] p-[1.2rem] bg-zinc-900/70 rounded-small shadow-card transition-all duration-[0.2s] z-[1] ease-in-out"
    >
      <ScrollShadow hideScrollBar className="w-full h-full">
        <div className="w-full h-full">
          <div className="w-full flex justify-between mb-[12px]">
            <h2 className="">{title}</h2>

            {id !== 'completed-list' ? <NewTaskButton data={data} /> : null}
          </div>

          {tasks?.map((task: Task, index: number) => (
            <TaskCard
              index={index}
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
    </Card>
  );
};

export default ToDoList;
