import React, { useState } from 'react';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
    fetch("http://localhost:3000/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    })
      .then(async function (response) {
        const json = await response.json();
        alert("Todo added");
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  };

  return (
    <div>
      <input
        style={{ margin: '10px', padding: '10px' }}
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        style={{ margin: '10px', padding: '10px' }}
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <button
        style={{ margin: '10px', padding: '10px' }}
        onClick={handleAddTodo}
      >
        Add A Todo
      </button>
    </div>
  );
};

export default CreateTodo;
