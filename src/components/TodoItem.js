import React from 'react';
import {users} from '../users';

function TodoItem(props) {
  const user = users.find(function(item) {
    return item["id"] === props["userId"]
  });

  return (
    <tr key={props["title"]}>
      <td>{props["title"]}</td>
      <td>{props["userId"]}</td>
      <td className="completed">{props["completed"].toString()}</td>
      <td>{user["name"]}</td>
      <td>{user["email"]}</td>
    </tr>
  );
}

export default TodoItem;