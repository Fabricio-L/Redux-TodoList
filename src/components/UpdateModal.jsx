import React, { useState } from 'react'
import { Button, TextField, IconButton, FormControl } from '@mui/material'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../redux/todoSlice'
import EditIcon from '@mui/icons-material/Edit'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const UpdateModal = (props) => {
    const [value, setValue] = useState('')
    const [open, setOpen] = React.useState(false)
    const dispatch = useDispatch()

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        console.log(value)
		if (value) {
			dispatch(
				updateTodo({
                    id: props.todoId,
				    title: value,
				})
			)
		}
        setOpen(false)
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            onSubmit(event)
            setOpen(false)
        }
    }


  return (
    <div>
        <IconButton aria-label="delete" variant="outlined" onClick={handleClickOpen}>
            <EditIcon />
        </IconButton>

        <Dialog open={open} onClose={handleClose} maxWidth='md' fullWidth={true}>
            <FormControl onSubmit={e => { e.preventDefault(); }} >
                <DialogTitle>Edit</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" variant="standard" fullWidth type="text" onKeyPress={handleKeyPress} id="filled-basic" label="Update Todo" defaultValue={props.todoTitle} onChange={(event) => setValue(event.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={onSubmit}>Update</Button>
                </DialogActions>
            </FormControl>
        </Dialog>
    </div>
  )
}

export default UpdateModal