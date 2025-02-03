import { useState } from 'react'
import '../index.css'
const TodoList = ()=>{

    const[todo,setTodo] = useState('')

    

    return (
        <>
         <h1>Hello React Todo List</h1>
         <div className="container">
            <div className='input'>
                <input type="text" placeholder="Enter your Todo"></input>
                <button>Add</button>
            </div>
            <ul className='todoList'>
                <li className='todoItem'>{todo}</li>
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
            </ul>
        </div>
        </>
    )
}

export default TodoList