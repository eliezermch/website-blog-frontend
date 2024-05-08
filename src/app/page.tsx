import NavBar from '@/components/navbar';
import ToDoList from '@/components/todo-list';

export default function Home() {
  return (
    <main className="dark">
      <NavBar />
      <div className="w-full flex flex-col justify-center items-center md:flex-row md:justify-evenly mt-[60px]">
        <ToDoList />
        <ToDoList />
      </div>
    </main>
  );
}
