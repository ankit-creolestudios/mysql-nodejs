import React from "react";
import SearchTodos from "./HOC/TodoList";
import SearchUser from "./HOC/UserList";
import { TodoList } from "./TodoList";
import { UserList } from "./UserList";

const HigherOrder = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <UserList />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
      <hr />
      <div>HigherOrder Component</div>
      <div style={{ display: "flex" }}>
        <div>
          <SearchUser />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div>
    </div>
  );
};

export default HigherOrder;
