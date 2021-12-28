import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import UserInput from "./component/User/UserInput";
import UserList from "./component/User/UserList";
// function onAddUser extends React.Component<ISign> {}
interface User {
  name: string;
  age: number;
}
function App() {
  const [usersList, setUsersList] = useState<Array<User>>([]);
  const addUserHandler = (name: string, age: number) => {
    console.log(name, age);
    setUsersList([...usersList, { name, age }]);
  };
  console.log("abc");
  console.log("abc");
  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
