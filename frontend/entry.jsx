import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import store from './store/store';

window.store = store;

document.addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(
		<Root />,
		document.getElementById('root')
	);
});
