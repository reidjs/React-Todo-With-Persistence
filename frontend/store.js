import { createStore, applyMiddleware } from 'redux';
import todosReducer from './reducers/todos_reducer';


const store = createStore(todosReducer);
window.store = store;
export default store;
