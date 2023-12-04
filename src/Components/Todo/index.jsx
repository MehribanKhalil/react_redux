import React from 'react'
import { useSelector } from 'react-redux'

const Todo = () => {
    const todos=useSelector((state)=>state.todos.todoVal)
  return (
    <div>
      <input type="text"  />
      <button>add</button>
      <ul>
        {
            todos.map(x=>(
                <li>{x}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default Todo
