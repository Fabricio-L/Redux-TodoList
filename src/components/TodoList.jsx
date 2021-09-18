import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'
import { getTodosAsync } from '../redux/todoSlide'

const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)

	useEffect(() => {
		dispatch(getTodosAsync())
	}, [dispatch])

	return (
		<ul>
			{todos.map((todo) => (
				<TodoItem id={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	)
}

export default TodoList