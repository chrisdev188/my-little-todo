import TodoItem from "./TodoItem";

export interface TodoProps {}

const mockTodos = [
  { id: 1, title: "Make todo header." },
  { id: 2, title: "Make todo body." },
  { id: 3, title: "Make todo header." },
  { id: 4, title: "Learn how to make a simple custom animation." },
];

export default function Todo(props: TodoProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl">
      <h2 className="text-black text-2xl font-semibold flex items-center gap-1">
        <span>Todo</span>
        <div className="max-w-[2rem]">
          <img src="/todo.png" alt="todo" />
        </div>
      </h2>
      <ul className="flex flex-col p-6 gap-6 my-4">
        {mockTodos.map((todo) => (
          <TodoItem key={todo.id} title={todo.title} />
        ))}
      </ul>
      <button className="text-black bg-slate-200 px-4 py-3 w-full rounded-md">
        Add todo
      </button>
    </div>
  );
}
