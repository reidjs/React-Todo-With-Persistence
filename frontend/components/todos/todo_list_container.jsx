import { connect } from 'react-redux';
import { receiveTodos, receiveTodo } from '../../todo_actions';
import todoList from './todo_list';
import { getAllTodos } from '../../reducers/selectors';

//grabbing state from store passing them as props so that component can use them
const mapStateToProps = (state) => ({
  todos: getAllTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

//allows presentational component todoList to have access
//to the props and actions
const todoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);

export default todoListContainer;
