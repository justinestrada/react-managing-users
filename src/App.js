import React, { useState } from 'react';

import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (user_name, user_age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: user_name, age: user_age, id: Math.random().toString()}];
    })
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
