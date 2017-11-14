import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import store from './store/store';
import todosReducer from './reducers/todos_reducer';
import { getAllTodos } from './reducers/selectors';
import TodoForm from './components/todos/todo_form';
window.formState = TodoForm;
window.store = store; //remove later
window.getAllTodos = getAllTodos;
window.todosReducer = todosReducer;
document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Root store={store} />,
		document.getElementById('root')
	);
});
