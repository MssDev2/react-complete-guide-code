import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import RemoveUser from './components/Users/RemoveUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: prevUsersList.length+1 },
      ];
    });
  };

  const removeUserHandler = () => {
    setUsersList((prevUsersList) => {
      prevUsersList.pop();
      return[...prevUsersList];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <RemoveUser onRemoveUser={removeUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
