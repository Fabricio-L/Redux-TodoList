import React, { Fragment } from "react"
import { Container, CssBaseline, Box } from '@mui/material'
import { ThemeProvider } from "@mui/material/styles"
import { selectUser } from "./redux/userSlice"
import { useSelector } from "react-redux"
import ListAltIcon from '@mui/icons-material/ListAlt'
import darkTheme from "./themeConfig"
import CompleteItems from "./components/CompleteItems"
import FormAddTodo from "./components/FormAddTodo"
import TodoList from "./components/TodoList"
import Login from "./components/Login"
import Logout from "./components/Logout"

function App() {
    const user = useSelector(selectUser)

    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
    }

    return (
        <Fragment>
            <ThemeProvider theme={darkTheme}>
                {user ? 
                    <Container maxWidth="md">
                        <Box sx={{...commonStyles, borderColor: 'primary.main', borderRadius: '16px' }} style={{padding: "1em", margin: "1em 0em"}}>
                            <Box style={{display: "flex", justifyContent: "space-between"}}>
                                <h1>Todo List <ListAltIcon fontSize="medium" /></h1>
                                <Logout />
                            </Box>
                            <FormAddTodo />
                            <TodoList />
                            <CompleteItems />
                        </Box>
                    </Container>
                : <Login />}
                <CssBaseline />
            </ThemeProvider>
        </Fragment>
    )
}

export default App
