import React from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function BlogCard() {
  const fetchAllTodo = async () => {
    const data = fetch("https://jsonplaceholder.typicode.com/todos");
    const res = (await data).json();
    return res;
  };

  const todos: TodoType[] = await fetchAllTodo();

  return (
    <div>
      {todos.map((itm) => (
        <div
          key={itm.id}
          className="h-60 my-2 mx-auto rounded-md shadow-sm bg-white"
        >
          <p>ID: {itm.id}</p>
          <p>User ID: {itm.userId}</p>
          <p>Title: {itm.title}</p>
          <p>Completed: {JSON.stringify(itm.completed)}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogCard;
