import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList'

import Login from './components/Login/Login';

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
     {/*  <AddUser userAdded={addNewUser}></AddUser>
      <UserList userlist={usersList} deleteUser={removeUser}></UserList> */}
      <Login></Login>
    </div>
  );
}

export default App;
