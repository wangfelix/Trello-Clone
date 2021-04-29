import './App.css';
import { ToDoList }  from './components/ToDoList.js'
import { useState } from 'react';
import { NavBar } from './components/NavBar.js'
import { CreateListBtn } from './components/CreateListBtn.js'

function App() {

  const [toDoLists, setToDoLists] = useState([{name: 'Erste Liste'}])

  

  return (
    <div className='App'>
      <NavBar></NavBar>

      <div className='todo-lists-container'>
        {toDoLists.map(list => (
          <ToDoList name={list.name}/>
        ))}
      </div>

      <CreateListBtn toDoLists={toDoLists} setToDoLists={setToDoLists}></CreateListBtn>
    </div>
  );
}

export default App;
