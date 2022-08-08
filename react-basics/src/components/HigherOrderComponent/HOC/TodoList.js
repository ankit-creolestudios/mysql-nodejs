import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  //   console.log(data);
  let renderList = data.slice(0, 10).map((todo) => {
    return (
      <div>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return <div>{renderList}</div>;
};
const SearchTodos = HOC(UserList, "todos");
export default SearchTodos;
