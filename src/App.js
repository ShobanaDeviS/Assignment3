import {React, useState} from 'react';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
   // console.log(uName, uAge)
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
    console.log('usersList',[usersList]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={[usersList]}/>

    </div>
  );
}

export default App;
