import { useState } from 'react';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    let newTodos = [...todos, { todo: newTodo.trim() }];
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <div className="container">
      <div>
        <h1>Enter you task</h1>
        <input
          type="text"
          placeholder="Enter your task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Save task</button>
      </div>
      <table>
        <tr>
          <th>all task</th>
        </tr>
        {todos.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.todo}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Todo;
