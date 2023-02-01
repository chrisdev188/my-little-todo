export interface TodoItemProps {
  title: string;
  id: number;
  onDelete: (id: number) => void;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <div className="text-black flex gap-4 items-center">
      <input type="checkbox" />
      <p>{props.title}</p>
      <button
        className="ml-auto"
        aria-label="Delete todo"
        onClick={() => props.onDelete(props.id)}
      >
        <img className="block w-5" src="/trash.svg" alt="" aria-hidden />
      </button>
    </div>
  );
}
