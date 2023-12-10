import React, { useState } from 'react';
import TodoItem from './TodoItem'; 

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Python',
      completed: true,
    },
    {
      id: 2,
      text: 'ReactJs',
      completed: false,
    },
  ]);

  const [text, setText] = useState('');

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }

  function editTask(id, newText) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, text: newText };
        } else {
          return task;
        }
      })
    );
  }

  return (
    <div className="todo-list">
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => addTask(text)}>Add</button>

      {/* Display the added tasks below the input and button */}
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TodoList;
