  
import React, { useState } from 'react'
import { TextField, Box, FormControl, Button } from '@mui/material'
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
        setValue(event.target.value = '')
	}

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            onSubmit(event)
        }
    }

	return (
        <Box>
            <FormControl onSubmit={e => { e.preventDefault(); }} style={{display: "flex", flexDirection: "row"}}>
                <TextField type="text" onKeyPress={handleKeyPress} id="filled-basic" label="Add Todo" variant="filled" style={{marginRight: "2em"}} value={value} onChange={(event) => setValue(event.target.value)} />
                <Button variant="contained" type="submit" onClick={onSubmit} style={{width: "8em"}}>Add</Button>
            </FormControl>
        </Box>
	)
}

export default FormAddTodo