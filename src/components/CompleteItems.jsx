import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const CompleteItems = () => {
	const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	)

	return (
        <Typography variant="button" display="block" gutterBottom>
            Total complete items: <span style={{color: "#66bb6a"}}>{todos.length}</span>
        </Typography>
    )
}

export default CompleteItems