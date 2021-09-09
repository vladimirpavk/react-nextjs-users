import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList'

function App() {
  const [usersList, setUsersList] = useState([]);

  const addNewUser = (eventData)=>{
    //console.log(eventData);
    setUsersList((oldValue)=>[...oldValue, eventData]);
  }

  return (
    <div>
      <AddUser userAdded={addNewUser}></AddUser>
      <UserList userlist={}></UserList>
    </div>
  );
}

export default App;
