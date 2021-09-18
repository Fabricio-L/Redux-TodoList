import React, { useEffect } from 'react'
import { List } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync } from '../redux/todoSlide'
import TodoItem from './TodoItem'

const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state) => state.todos)

	useEffect(() => {
		dispatch(getTodosAsync())
	}, [dispatch])

	return (
		<List>
			{todos.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} userId={todo.userId} title={todo.title} completed={todo.completed} />
			))}
		</List>
	)
}

export default TodoList