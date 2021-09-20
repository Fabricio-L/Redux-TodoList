import React, { Fragment } from 'react'
import { ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText, IconButton, Divider } from '@mui/material'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'
import UpdateModal from './UpdateModal'
import DeleteIcon from '@mui/icons-material/Delete'

const TodoItem = ({ id, userId, title, completed }) => {
	const dispatch = useDispatch()

	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }))
	}

	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id: id }))
	}

	return (
        <Fragment>
            <ListItem disablePadding>
                <ListItemButton>
                    {/* <ListItemText primary={userId} /> */}
                    <ListItemIcon>
                        <Checkbox edge="start" checked={completed} tabIndex={-1} disableRipple onClick={handleCheckboxClick} />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItemButton>
                
                <UpdateModal todoId={id} todoUser={userId} todoTitle={title} todoCompleted={completed} />
                <IconButton aria-label="delete" variant="outlined" color="error" onClick={handleDeleteClick}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
            <Divider />
        </Fragment>
	)
}

export default TodoItem