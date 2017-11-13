// export const ADD_ITEM = "ADD_ITEM";
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

// export const addItem = (item) => ({
//   type: ADD_ITEM,
//   item
// });
const data = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

export const receiveTodos = () => ({
  type: RECEIVE_TODOS
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO
});
