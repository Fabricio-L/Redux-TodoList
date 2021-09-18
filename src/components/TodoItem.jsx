import React from 'react'
import { ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText, IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlide'
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ id, userId, title, completed }) => {
	const dispatch = useDispatch()

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }))
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }))
	}

	return (
		<ListItem disablePadding>
            <ListItemButton>
                {/* <ListItemText primary={userId} /> */}
                <ListItemIcon>
                    <Checkbox edge="start" checked={completed} tabIndex={-1} disableRipple onClick={handleCheckboxClick} />
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>

            <IconButton aria-label="delete" variant="outlined" color="error" onClick={handleDeleteClick}>
                <DeleteIcon />
            </IconButton>
		</ListItem>
	)
}

export default TodoItem