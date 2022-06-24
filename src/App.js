import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserListHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [...prevList, {name: uName, age: uAge, id: Math.random().toString()}];
    })
  }
  return (
    <div>
      <AddUser addUserData={addUserListHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
