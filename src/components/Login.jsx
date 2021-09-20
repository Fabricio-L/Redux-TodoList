import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../redux/userSlice'
import { Container, Typography, Box, Avatar, Button, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(email === 'admin@gmail.com' && pass === 'admin'){
            dispatch(login({
                email: email,
                pass: pass,
                loggedIn: true
            }))
        }else{
            alert('Email and Password Incorrect\nTry Email: admin@gmail.com and Password: admin\nThank you :)')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
        <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Log in
            </Typography>
            <Box component="form" onSubmit={(e) => handleSubmit(e)} noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus onChange={(e) => setEmail(e.target.value)} />
                <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" onChange={(e) => setPass(e.target.value)} />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Log In
                </Button>
            </Box>
        </Box>
    </Container>
    )
}

export default Login
