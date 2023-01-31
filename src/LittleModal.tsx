import React from "react";
import { Todo } from "./App";

export interface LittleModalProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  formValues: Todo;
}

export default function LittleModal(props: LittleModalProps) {
  return (
    <form
      onSubmit={props.handleAddTodo}
      className="bg-blue-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-lg overflow-hidden w-96"
    >
      <h3 className="text-xl bg-slate-900 text-white p-2">Add todo</h3>
      <input
        type="text"
        placeholder="Enter title..."
        name="title"
        value={props.formValues.title}
        onChange={props.handleChange}
        className="p-2 w-full"
      />
      <button
        className="bg-blue-500 text-white text-center block w-full p-2"
        type="submit"
      >
        Add
      </button>
      <button
        className="bg-red-400 text-white text-center block w-full p-2"
        type="button"
        onClick={() => props.setShowAddForm(false)}
      >
        Close
      </button>
    </form>
  );
}
