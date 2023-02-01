import { useReducer, useState } from "react";
import { createPortal } from "react-dom";
import LittleModal from "./LittleModal";
import TodoList from "./Todo";
import Todo from "./Todo";

export type Todo = {
  id: number;
  title: string;
};

type State = {
  todoList: Todo[];
};

type Action = {
  type: "add_todo" | "delete_todo";
  payload: Todo;
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add_todo":
      return { todoList: [...state.todoList, action.payload] };
    case "delete_todo":
      return {
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    default:
      throw new Error("There is something wrong!!!");
  }
};

const initialState: State = {
  todoList: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "add_todo",
      payload: { id: Date.now(), title: text },
    });
    setText("");
    setShowAddForm(false);
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "delete_todo", payload: { id: id, title: "" } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div className="bg-pink-500 min-h-screen grid place-items-center">
      <TodoList
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
        handleDelete={handleDelete}
        todo={state.todoList}
      />
      {showAddForm &&
        createPortal(
          <LittleModal
            handleChange={handleChange}
            text={text}
            setShowAddForm={setShowAddForm}
            handleAddTodo={handleAddTodo}
          />,
          document.body
        )}
    </div>
  );
}

export default App;
