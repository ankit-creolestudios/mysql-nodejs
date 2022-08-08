import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UserList = ({ data }) => {
  //   console.log(data);
  let renderList = data.map((user) => {
    return (
      <div>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return <div>{renderList}</div>;
};
const SearchUser = HOC(UserList, "users");
export default SearchUser;
