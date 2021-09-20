import React from 'react'
import { Box, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/userSlice'

const Logout = () => {
    const dispatch = useDispatch()
    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(logout())
    }

    return (
        <Box component="form"  noValidate sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={(e) => handleLogout(e)} >
                Log Out
            </Button>
        </Box>
    )
}

export default Logout
