import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const Root = () => (
	<Provider store={store}>
    <div> hi</div>
	</Provider>
);

export default Root;
