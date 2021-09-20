import React from 'react'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const CompleteItems = () => {
	const todos = useSelector((state) =>
		state.todos.filter((todo) => todo.completed === true)
	)

	return (
        <Typography style={{display: "flex", alignItems: "center"}} variant="button" display="block" gutterBottom>
            Total complete items: <span style={{color: "#66bb6a", fontSize: "22px", margin: "0px 5px"}}>{todos.length}</span>
            <AssignmentTurnedInIcon color="success" />
        </Typography>
    )
}

export default CompleteItems