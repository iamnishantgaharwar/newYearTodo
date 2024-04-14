import axios from 'axios'
import { useEffect } from 'react'

export function Todos ({ todos }) {

    const markComplete = (id) => {
        const requestData = {
            id: id,
        }
        const headers = {
            'Content-Type': 'application/json'
        }
        const update = axios.put("http://localhost:3000/completed",requestData,headers)
    }
    const deleteData = (id) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                id: id
            }
        }
        console.log(config);
        axios.delete("http://localhost:3000/delete", config)
    }
    return(
        <>
        {todos.map(function(todo, _id){
            return(
                <div key={_id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <h2>{todo._id}</h2>
                    <button onClick={() => (markComplete(todo._id))}>
                        {todo.completed == true ? "Completed" : "Mark as completed"}
                    </button>
                    <button onClick={() => (deleteData(todo._id))}>Delete Data</button>
                </div>
            )
        })}
        </>
    )
}