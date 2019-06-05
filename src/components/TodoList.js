import React from 'react';
import TodoItem from './TodoItem';
import {todos} from '../todos';

function TodoList() {
  const mainList = [];
  for(let item of todos) {
    mainList.push(TodoItem(item));
  }

   return (
     <table>
       <thead>
       <tr>
         <th>Title</th>
         <th>UserId</th>
         <th>Is completed</th>
         <th>Name</th>
         <th>Email</th>
       </tr>
       </thead>
       <tbody>
         {mainList}
       </tbody>
     </table>
   );
}

export default TodoList;