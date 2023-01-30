export interface TodoItemProps {
  title: string;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <div className="text-black flex gap-4 items-center">
      <input type="checkbox" name="" id="" />
      <p>{props.title}</p>
      <button className="ml-auto">
        <img className="block w-6" src="/ellipses.svg" alt="" />
      </button>
    </div>
  );
}
