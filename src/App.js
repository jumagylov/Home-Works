import { useState } from 'react';
import './App.css'
import AddUser from './Component/Count/AddUser';
import UserList from './Component/Count/UsersList';


function App() {
const [userList, setUserList] = useState([])

const addUserHandler = (uName, uage)=>{

  setUserList(prevUserList=>{
    return[...prevUserList, {name: uName, age: uage, id:Math.random().toString()}]
  })
}

function DeletUSer(id){
  setUserList((prev) => {
     return prev.filter((el) => el.id !== id)
  })
}


  return (
    <div className="App">
    <AddUser onAddUser={addUserHandler}/>
    <UserList users={userList} onDelete={DeletUSer}/>

    </div>
  );
}

export default App;
