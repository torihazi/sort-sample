import { useEffect, useState } from "react";
import { User } from "./types/user";
import { FaSort } from "react-icons/fa";

export const Table = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isIdSort, setIsIdSort] = useState<boolean>(false);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res: User[]) => {
        setUsers(res);
      });
  }, []);

  useEffect(() => {
    isIdSort
      ? setUsers([...users].sort((a, b) => b.id - a.id))
      : setUsers([...users].sort((a, b) => a.id - b.id));
  }, [isIdSort]);

  const handleClickIdSort = () => setIsIdSort((prev) => !prev);

  return (
    <table className="table-auto">
      <thead>
        <tr className="text-left">
          <th>
            Id
            <button className="border rounded" onClick={handleClickIdSort}>
              <FaSort />
            </button>
          </th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.name}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
