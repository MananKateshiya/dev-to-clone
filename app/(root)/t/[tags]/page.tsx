import React, { Suspense } from "react";
import Loading from "@/app/(root)/loading";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
type PageParams = {
  params:{
    tags: number;
  }
};

async function fetchTodos(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const todo: TodoType = await res.json();
  return todo;
}

async function TodoPage( {params:{ tags }} : PageParams) {
  
 
  const td = await fetchTodos(tags);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        Todos:
        <p>ID: {td.id}</p>
        <p>User ID: {td.userId}</p>
        <p>Title: {td.title}</p>
        <p>Completed: {JSON.stringify(td.completed)}</p>
      </Suspense>
    </div>
  );
}

export default TodoPage;

// export async function wait(ms: number) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }
