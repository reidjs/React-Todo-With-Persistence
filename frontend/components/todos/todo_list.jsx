import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ( {todos, receiveTodos, receiveTodo} ) => (
  <div>
    <button onClick={receiveTodo}>Add todo</button>
      <ul>
        {
          todos.map((todo, idx) => (
            <TodoListItem todo={todo} key={idx} />
          ))
        }
      </ul>
  </div>

);

export default TodoList;
