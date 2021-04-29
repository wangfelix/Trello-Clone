import './App.css';
import { ToDoList }  from './components/ToDoList.js'
import { useState } from 'react';
import { NavBar } from './components/NavBar.js'
import { CreateListBtn } from './components/CreateListBtn.js'

function App() {

  const [toDoLists, setToDoLists] = useState([{name: 'Erste Liste', id: 0}])

  function generateKey() {
    return new Date().getTime().toString;
  }

  return (
    <div className='App'>
      <NavBar></NavBar>

      <div className='todo-lists-container'>
        {toDoLists.map((list) => (
          <ToDoList
            name={list.name}
            toDoLists = {toDoLists}
            setToDoLists={setToDoLists}
            key={list.id}
            id = {list.id}
          />
        ))}
      </div>

      <CreateListBtn toDoLists={toDoLists} setToDoLists={setToDoLists}></CreateListBtn>
    </div>
  );
}

export default App;
