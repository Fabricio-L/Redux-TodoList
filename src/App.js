import React, { Fragment } from "react"
import { Container, CssBaseline, Box } from '@mui/material'
import { ThemeProvider } from "@mui/material/styles"
import darkTheme from "./themeConfig"
import CompleteItems from "./components/CompleteItems"
import FormAddTodo from "./components/FormAddTodo"
import TodoList from "./components/TodoList"

function App() {
    const commonStyles = {
        bgcolor: 'background.paper',
        m: 1,
        border: 1,
    }

    return (
        <Fragment>
            <ThemeProvider theme={darkTheme}>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Box sx={{...commonStyles, borderColor: 'primary.main', borderRadius: '16px' }} style={{padding: "1em", margin: "1em 0em"}}>
                            <h1>Todo List</h1>
                            <FormAddTodo />
                            <TodoList />
                            <CompleteItems />
                        </Box>
                    </Container>
            </ThemeProvider>
        </Fragment>
    )
}

export default App
