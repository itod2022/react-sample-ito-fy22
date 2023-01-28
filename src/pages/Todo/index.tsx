import React, { useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import TodoList from './TodoList'

const Todo = () => {
    const [todos, setTodos] = useState([{id: "", name: ""}])
    const todoNameRef = useRef<HTMLInputElement>(null!)

    const handleAddTodo = () => {
    const name = todoNameRef.current?.value

    setTodos((prevTodos) => {
        return[...prevTodos, {id: name, name: name}]
    })
}

    return (
      <div>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <TodoList todos={todos}/>
      </div>
    )
  }

export default Todo