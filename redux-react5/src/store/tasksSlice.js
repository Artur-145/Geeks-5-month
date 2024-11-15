import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [], 
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                title: action.payload,
                timeSpent: 0,
                status: "Pending", 
                timerId: null, 
            });
        },
        startTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) task.status = "In Progress";
        },
        pauseTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.status = "Paused";
                clearInterval(task.timerId); 
                task.timerId = null;
            }
        },
        incrementTimeSpent: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task && task.status === "In Progress") {
                task.timeSpent += 1;
            }
        },
        completeTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) {
                task.status = "Completed";
                clearInterval(task.timerId);
                task.timerId = null;
            }
        },
        setTimerId: (state, action) => {
            const { taskId, timerId } = action.payload;
            const task = state.tasks.find((t) => t.id === taskId);
            if (task) {
                task.timerId = timerId; 
            }
        },
    },
});

export const {
    addTask,
    startTask,
    pauseTask,
    incrementTimeSpent,
    completeTask,
    setTimerId,
} = tasksSlice.actions;

export default tasksSlice.reducer;
