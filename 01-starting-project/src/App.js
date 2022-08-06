import React, { useState } from 'react';


import './App.css';
import './components/UserInput'
import UserInput from './components/UserInput';

const App = () => {

  const [users, setUsers] = useState('');

  const getUserData = (user) =>
  {
    setUsers((prevUsers) => {
      return[user, ...prevUsers];
    }); 
    console.log(users);
  };

  return (
      <div>
        <section id="user-form">
          <UserInput onAddUser= {getUserData}/>
        </section>
        <section id="users-list">
       
         
        </section>
      </div>

  );
};

export default App;
