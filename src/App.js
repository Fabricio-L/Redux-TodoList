import React from "react"
import CompleteItems from "./components/CompleteItems"
import FormAddTodo from "./components/FormAddTodo"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="App">
        <h1>Todo List</h1>
        <FormAddTodo />
		<TodoList />
		<CompleteItems />
    </div>
  )
}

export default App
