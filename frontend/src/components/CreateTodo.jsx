import { useEffect, useState } from "react";
import axios from 'axios'

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // useEffect(() => {
    //     const sendPayload = setTimeout(() => {
    //         const body = {
    //             title: title,
    //             description: description
    //         }
    //         console.log(body);
    //         axios.post('http://localhost:3000/todo'),
    //             body
    //     }, 2000)
    //     return () => clearTimeout(sendPayload)
    // }, [title, description])

    const onAddTodo = () => {
        const body = {
            title: title,
            description: description
        }

        const headers = {
            'Content-Type': 'application/json'
        }
        console.log(body);
        const payload = axios.post('http://localhost:3000/todo',
        body,
        headers).then(response => {
            alert('Todo created')
        }).catch(error => {
            alert("failed to create todo")
        }) 
    }

    return (
        <div>
            <input
                type="text"
                placeholder="title"
                onChange={function (e) {
                    const value = e.target.value;
                    setTitle(value);
                }}
            ></input>{" "}
            <br />
            <input type="text" placeholder="description" onChange={function (e) {
                const value = e.target.value;
                setDescription(value);
            }}></input> <br />
            <button onClick={onAddTodo}>Add a todo</button>
        </div>
    );
}
