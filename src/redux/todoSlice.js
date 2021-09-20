import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getTodosAsync = createAsyncThunk(
    'todos/getTodosAsync',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if(response.ok) {
            const temp = await response.json()
            const todos = temp.slice(0, 9)
            return { todos }
        }
    }
)

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        // Test items if API doesn't works
        {id: 1, title: "todo1", completed: false},
        {id: 2, title: "todo2", completed: false},
        {id: 3, title: "todo3", completed: true}
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            }
            state.push(newTodo)
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].completed = action.payload.completed
        },
        updateTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id)
            state[index].title = action.payload.title
        },
        deleteTodo: (state, action) => {
            return state.filter((todo)=> todo.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getTodosAsync.pending]: (state, action) => {
            console.log('Getting data...')
        },
        [getTodosAsync.fulfilled]: (state, action) => {
            console.log('Getting data successfully!')
            return action.payload.todos
        }
    }
})

export const { addTodo, toggleComplete, updateTodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer
