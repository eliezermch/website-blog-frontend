import ToDoList from '@/components/todo-list';

const ToDoPage = () => {
  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center gap-[32px] md:px-[24px] lg:px-[0] md:gap-[130px] md:flex-row mt-[60px]">
        <ToDoList title="To-Do List" />
        <ToDoList title="Done Tasks" />
      </div>
    </main>
  );
};

export default ToDoPage;
