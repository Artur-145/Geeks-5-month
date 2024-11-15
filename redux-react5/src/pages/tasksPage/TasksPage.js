import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addTask,
    startTask,
    pauseTask,
    incrementTimeSpent,
    completeTask,
    setTimerId,
} from "../../store/tasksSlice";
import { changeInputAction, clearInput } from "../../store/titleSlice";

const TasksPage = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasksReducer.tasks);
    const inputValue = useSelector((state) => state.titleReducer.inputValue);

    const handleAddTask = () => {
        dispatch(addTask(inputValue));
        dispatch(clearInput());
    };

    const handleStartTask = (taskId) => {
        const intervalId = setInterval(() => {
            dispatch(incrementTimeSpent(taskId));
        }, 1000);

        dispatch(startTask(taskId));
        dispatch(setTimerId({ taskId, timerId: intervalId }));
    };

    const handlePauseTask = (taskId) => {
        dispatch(pauseTask(taskId));
    };

    const handleCompleteTask = (taskId) => {
        dispatch(completeTask(taskId)); 
    };

    return (
        <div className="tasksContainer">
            <h1>Task Manager with Timer</h1>
            <div className="task-input">
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={inputValue}
                    onChange={(e) => dispatch(changeInputAction(e.target.value))}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            <div className="task-list">
                <h2>Task List</h2>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div>
                                <strong>{task.title}</strong>
                                <span> - Time Spent: {task.timeSpent} sec</span>
                                <span> - {task.status}</span>
                            </div>

                            {task.status === "Pending" && (
                                <button onClick={() => handleStartTask(task.id)}>
                                    Start
                                </button>
                            )}
                            {task.status === "In Progress" && (
                                <>
                                    <button onClick={() => handlePauseTask(task.id)}>
                                        Pause
                                    </button>
                                    <button onClick={() => handleCompleteTask(task.id)}>
                                        Complete
                                    </button>
                                </>
                            )}
                            {task.status === "Paused" && (
                                <button onClick={() => handleStartTask(task.id)}>
                                    Resume
                                </button>
                            )}
                            {task.status === "Completed"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TasksPage;
