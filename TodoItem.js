import React, { useState } from 'react';

function TodoItem({ task, deleteTask, toggleCompleted, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  function handleChange() {
    toggleCompleted(task.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    // Save the edited text
    editTask(task.id, editedText);
    setIsEditing(false);
  }

  function handleCancel() {
    // Reset the edited text and cancel editing
    setEditedText(task.text);
    setIsEditing(false);
  }

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleChange}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <p>{task.text}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
