import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import studentReducer from './studentSlice';
import todoReducer from './todoSlice'; // Import the todoSlice

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
    todos: todoReducer, // Add the todo reducer
  },
});

export default store;
