  
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/todoSlide'

const FormAddTodo = () => {
	const [value, setValue] = useState('')
	const dispatch = useDispatch()

	const onSubmit = (event) => {
		event.preventDefault()
		if (value) {
			dispatch(
				addTodo({
				    title: value,
				})
			)
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<label>Name</label>
			<input type='text' placeholder='Add Todo' value={value} onChange={(event) => setValue(event.target.value)}></input>
			<button type='submit'>
				Submit
			</button>
		</form>
	)
}

export default FormAddTodo