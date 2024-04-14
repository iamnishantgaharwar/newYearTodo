import { useEffect, useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios';

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);
  const [buttonClick, setButtonClick] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:3000/todos").then(response => {
      setTodos(response.data.todos)
      console.log(response.data.todos);
    })
  },[])
  
  function refreshData() {
      axios.get("http://localhost:3000/todos").then(response => {
        setTodos(response.data.todos)
        console.log(response.data.todos);
      })
      
      setButtonClick(false)
  }
  return (
    <div>
      
      <CreateTodo />
      <Todos todos={todos}></Todos>
      <button onClick={refreshData}>{buttonClick == true ? "Please wait" : "Refresh"}</button>
      
    </div>
  )
}

export default App