import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setFilter } from "../../redux/actions";
import TodoList from "./TodoList";

const Todo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const filter = useSelector(state => state.todoReducer.filter);

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    const handleFilterChange = (newFilter) => {
        dispatch(setFilter(newFilter));
    };

    const handleResetFilter = () => {
        dispatch(setFilter('all'));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Enter a new task"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={handleAddTodo}>Add task</button>

            <div>
                <button onClick={() => handleFilterChange('all')} disabled={filter === 'all'}>All</button>
                <button onClick={() => handleFilterChange('active')} disabled={filter === 'active'}>Active</button>
                <button onClick={() => handleFilterChange('completed')} disabled={filter === 'completed'}>Completed</button>
                <button onClick={handleResetFilter}>Reset Filter</button>
            </div>

            <TodoList />
        </div>
    );
};

export default Todo;
