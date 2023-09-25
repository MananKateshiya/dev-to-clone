import React from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type PageParams = {
  isLatest: boolean;
  limit: number;
};

async function BlogCard({ isLatest = false, limit }: PageParams) {
  const fetchAllTodo = async () => {
    const data = fetch("https://jsonplaceholder.typicode.com/todos");
    const res = (await data).json();
    return res;
  };

  let todos: TodoType[] = await fetchAllTodo();

  
  isLatest === true ? (todos = todos.reverse()) : todos;
  
  return (
    <div>
      
      {todos.slice(0,limit).map((itm) => (
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
