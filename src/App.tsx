import { useState } from "react";
import { Table } from "./Table";
import { User } from "./types/user";
import { Form } from "./Form";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [email, setEmail] = useState<User["email"]>("");

  return (
    <div className="flex flex-col justify-center items-center w-[80%]">
      <Form email={email} setEmail={setEmail} />
      <Table users={users} setUsers={setUsers} email={email} />
    </div>
  );
}

export default App;
