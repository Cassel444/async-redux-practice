
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';

export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/tasks');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (newTask, thunkAPI) => {
        try {
            const response = await axios.post('/tasks', newTask);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const deleteTask = createAsyncThunk(
    'task/deleteTask',
    async (taskId, thunkAPI) => {
        try {
            const response = await axios.delete(`/task/${taskId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
export const toggleCompleted = createAsyncThunk(
    'task/toggleCompleted',
    async (toggle, thunkAPI) => {
        try {
            const response = await axios.put(`/tasks/${toggle.id}`, {
                completed: !toggle.completed,
            });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);



