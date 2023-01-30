import { useState } from "react";
import { createPortal } from "react-dom";
import LittleModal from "./LittleModal";
import Todo from "./Todo";

function App() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="bg-black min-h-screen grid place-items-center">
      <Todo showAddForm={showAddForm} setShowAddForm={setShowAddForm} />
      {showAddForm &&
        createPortal(
          <LittleModal setShowAddForm={setShowAddForm} />,
          document.body
        )}
    </div>
  );
}

export default App;
