import { RECEIVE_TODO, RECEIVE_TODOS } from '../todo_actions';
const _defaultState = {};

const todosReducer = (oldState = _defaultState, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_TODO:
      return {
    //     todo: [...oldState, action.item]
      };
      case RECEIVE_TODOS:
      return {
        // item: [...oldState.items, action.item]
      };
    default:
      return oldState;
  }
};

export default todosReducer;
