import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlide'

const TodoItem = ({ id, userId, title, completed }) => {
	const dispatch = useDispatch()

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }))
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }))
	}

	return (
		<li>
			<div>
				<span>
					<input type='checkbox' checked={completed} onClick={handleCheckboxClick}></input>
					{title}
                    {userId}
				</span>
				<button onClick={handleDeleteClick}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default TodoItem