import React from "react";

export interface LittleModalProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LittleModal(props: LittleModalProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Todo added");
  };

  return (
    <form
      className="bg-blue-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-lg overflow-hidden"
      onSubmit={handleSubmit}
    >
      <div className="header bg-black text-white p-4">
        <h3 className="text-xl">Add todo</h3>
      </div>
      <div className="body">
        <input
          type="text"
          placeholder="Enter todo..."
          className="p-2 min-h-[5rem]"
        />
      </div>
      <div className="footer">
        <button
          className="bg-blue-500 text-white text-center block w-full p-3"
          type="submit"
        >
          Add
        </button>
        <button
          className="bg-red-400 text-white text-center block w-full p-3"
          type="button"
          onClick={() => props.setShowAddForm(false)}
        >
          Close
        </button>
      </div>
    </form>
  );
}
