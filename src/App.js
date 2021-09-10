import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUser = (eventData)=>{
    //console.log(eventData);
    setUsersList((oldValue)=>[...oldValue, {id:Math.random(), ...eventData}]);
  }

  const removeUser = (idUser)=>{
    //console.log('remove user', idUser);
    setUsersList(
      oldUsers=>oldUsers.filter(element=>element.id!==idUser)
    )
  }

  return (
    <div>
      <AddUser userAdded={addNewUser}></AddUser>
      <UserList userlist={usersList} deleteUser={removeUser}></UserList>
    </div>
  );
}

export default App;
