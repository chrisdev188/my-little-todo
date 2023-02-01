import React, { useRef } from "react";
import Draggable from "react-draggable";

export interface LittleModalProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}

export default function LittleModal(props: LittleModalProps) {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <form
        ref={nodeRef}
        onSubmit={props.handleAddTodo}
        className="bg-blue-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-lg overflow-hidden w-64"
      >
        <h3 className="text-xl bg-slate-900 text-white py-2 px-4">Add todo</h3>
        <input
          type="text"
          placeholder="Enter title..."
          name="title"
          value={props.text}
          onChange={props.handleChange}
          required
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
    </Draggable>
  );
}
