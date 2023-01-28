import React from 'react'
import Todo from './Todo'

// TODO 拡張子jsxはtsxが正しい 大内さん確認

const TodoList = ({todos}) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.name} />)
}

export default TodoList
