import ToDoList from '@/components/todo-list';

const ToDoPage = () => {
  return (
    <main>
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-evenly mt-[60px]">
        <ToDoList title="To-Do List" />
        <ToDoList title="Done Tasks" />
      </div>
    </main>
  );
};

export default ToDoPage;
