import React from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type PageParams = {
  params: {
    tags: string;
  };
};

async function fetchTodos(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo: TodoType = await res.json();
  return todo;
}

async function TodoPage({ params: { tags } }: PageParams) {
  const td = await fetchTodos(tags);

  return (
    <div>
      Todos:
      <p>ID: {td.id}</p>
      <p>User ID: {td.userId}</p>
      <p>Title: {td.title}</p>
      <p>Completed: {JSON.stringify(td.completed)}</p>
    </div>
  );
}

export default TodoPage;
