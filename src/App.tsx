import { useState } from "react";
import { createPortal } from "react-dom";
import LittleModal from "./LittleModal";
import TodoList from "./Todo";
import Todo from "./Todo";

export interface Todo {
  title: string;
}

function App() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [formValues, setFormValues] = useState<Todo>({
    title: "",
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo((prevTodo) => [...prevTodo, formValues]);
    setFormValues({ title: "" });
    setShowAddForm(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return { ...prevValues, [name]: value };
    });
  };

  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <TodoList
        showAddForm={showAddForm}
        setShowAddForm={setShowAddForm}
        todo={todo}
      />
      {showAddForm &&
        createPortal(
          <LittleModal
            handleChange={handleChange}
            formValues={formValues}
            setShowAddForm={setShowAddForm}
            handleAddTodo={handleAddTodo}
          />,
          document.body
        )}
    </div>
  );
}

export default App;
