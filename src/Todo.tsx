import { Todo } from "./App";
import TodoItem from "./TodoItem";

export interface TodoProps {
  showAddForm: boolean;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  todo: Todo[];
}

export default function TodoList(props: TodoProps) {
  return (
    <div className="bg-slate-50 p-6 rounded-xl">
      <h2 className="text-black text-2xl font-semibold flex items-center gap-1">
        <span>Todo</span>
        <div className="max-w-[2rem]">
          <img src="/todo.png" alt="todo" />
        </div>
      </h2>
      {props.todo.length > 0 ? (
        <ul className="flex flex-col p-6 gap-6 my-4">
          {props.todo.map((todo) => (
            <TodoItem key={todo.title} title={todo.title} />
          ))}
        </ul>
      ) : (
        <p className="p-6">There is no todo...</p>
      )}
      <button
        className="text-black bg-slate-200 px-4 py-3 w-full rounded-md"
        onClick={() => props.setShowAddForm(true)}
      >
        Add todo
      </button>
    </div>
  );
}
