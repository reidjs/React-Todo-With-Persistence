import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import store from './store/store';
import todosReducer from './reducers/todos_reducer';


window.store = store; //remove later
window.todosReducer = todosReducer;
document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Root />,
		document.getElementById('root')
	);
});
