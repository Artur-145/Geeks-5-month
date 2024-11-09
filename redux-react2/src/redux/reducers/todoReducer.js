import { types } from "../types";

const initialState = {
    todos: [],
    filter: 'all' 
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload, completed: false }
                ]
            };
        case types.TOGGLE_TODO: 
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case types.REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case types.SET_FILTER:
            return {
                ...state,
                filter: action.payload 
            };
        default:
            return state;
    }
}
