import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList'

import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';

function App() {
 /*  const [usersList, setUsersList] = useState([]);

  const addNewUser = (eventData)=>{
    //console.log(eventData);
    setUsersList((oldValue)=>[...oldValue, {id:Math.random(), ...eventData}]);
  }

  const removeUser = (idUser)=>{
    //console.log('remove user', idUser);
    setUsersList(
      oldUsers=>oldUsers.filter(element=>element.id!==idUser)
    )
  } */

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (username, password)=>{
    console.log(username, password);
    setIsLoggedIn(true);
  }

  const logoutHandler = ()=>{
    setIsLoggedIn(false);
  }

  return (
    <div className="main">
     {/*  <AddUser userAdded={addNewUser}></AddUser>
      <UserList userlist={usersList} deleteUser={removeUser}></UserList> */}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={(eventData)=>logoutHandler(eventData)}></MainHeader>
      {!isLoggedIn && <Login onLogin={loginHandler}></Login>}
      {isLoggedIn && <Home onLogout={(eventData)=>logoutHandler(eventData)}></Home>}
    </div>
  );
}

export default App;
