import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const apiRes = await res.json();
      setTodos(apiRes);
    };
    getTodos();
  }, []);
  let renderList = todos.map((todo) => {
    return (
      <div>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  let filterTodos = todos
    .slice(0, 10)
    .filter((item) => {
      return item.title.indexOf(search) >= 0;
    })
    .map((todo) => {
      return (
        <div>
          <p>
            <strong>{todo.title}</strong>
          </p>
        </div>
      );
    });
  return (
    <div>
      TodoList
      <div>
        <input
          type={"text"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filterTodos}
    </div>
  );
};
