import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

import "./App.css";

function App() {
  const [usersList, setUsersList] = useState([
    {
      username: "Callum",
      age: 500,
    },
  ]);

  const addUserHandler = (username, age) => {
    setUsersList((prevState) => [{ username, age }, ...prevState]);
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
