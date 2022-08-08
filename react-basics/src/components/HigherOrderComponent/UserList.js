import React, { useEffect, useState } from "react";

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const apiRes = await res.json();
      setUsers(apiRes);
    };
    getUsers();
  }, []);
  let renderList = users.map((user) => {
    return (
      <div>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  let filterUsers = users
    .filter((item) => {
      return item.name.indexOf(search) >= 0;
    })
    .map((user) => {
      return (
        <div>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      );
    });
  return (
    <div>
      UserList
      <div>
        <input
          type={"text"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {filterUsers}
    </div>
  );
};
