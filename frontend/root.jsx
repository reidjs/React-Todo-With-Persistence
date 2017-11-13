import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './components/app';

const Root = () => (
	<Provider store={store}>
		<div>
			<App />
			<h1> hello!</h1>
		</div>
	</Provider>
);

export default Root;
