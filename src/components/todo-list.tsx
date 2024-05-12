import TaskCard from './task-card';
import { ScrollShadow } from '@nextui-org/react';

interface Props {
  title: string;
}

const ToDoList = ({ title }: Props) => {
  return (
    <div className=" w-full max-w-[420px] min-w-[280px] h-[540px] p-[1.2rem] bg-zinc-800 rounded-small shadow-card transition-all duration-[0.2s] ease-in-out">
      <ScrollShadow hideScrollBar className="w-full h-full">
        <div className="w-full h-full">
          <h2 className="mb-[12px]">{title}</h2>

          <TaskCard />
          <TaskCard />
        </div>
      </ScrollShadow>
    </div>
  );
};

export default ToDoList;
