## 1. GET - Fetch All Todos

To retrieve all todos from the database:

```javascript
// Fetch all todos
function getAllTodos() {
  // Use the fetch API to make a GET request to your /todos endpoint
  fetch('http://localhost:3000/todos')
    .then(response => {
      // Check if the response is ok (status 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Do something with the todos data
      // For example, update your UI with the todos
      // Example: displayTodos(data);
    })
    .catch(error => {
      console.error('Error fetching todos:', error);
    });
}
```

## 2. POST - Create a New Todo

To add a new todo to the database:

```javascript
// Create a new todo
function createTodo(title) {
  // Use the fetch API to make a POST request to your /todos endpoint
  fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: title })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(newTodo => {
    // Do something with the newly created todo
    // Example: addTodoToUI(newTodo);
  })
  .catch(error => {
    console.error('Error creating todo:', error);
  });
}
```

## 3. PUT - Update an Existing Todo

To update a todo in the database:

```javascript
// Update a todo
function updateTodo(id, updatedData) {
  // Use the fetch API to make a PUT request to your /todos/:id endpoint
  fetch(`http://localhost:3000/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(updatedTodo => {
    // Do something with the updated todo
    // Example: updateTodoInUI(updatedTodo);
  })
  .catch(error => {
    console.error('Error updating todo:', error);
  });
}
```

## 4. DELETE - Remove a Todo

To delete a todo from the database:

```javascript
// Delete a todo
function deleteTodo(id) {
  // Use the fetch API to make a DELETE request to your /todos/:id endpoint
  fetch(`http://localhost:3000/todos/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Do something after successful deletion
    // Example: removeTodoFromUI(id);
  })
  .catch(error => {
    console.error('Error deleting todo:', error);
  });
}
```

## 5. Search - Find Todos

To search for todos that match a specific term:

```javascript
// Search todos
function searchTodos(searchTerm) {
  // Use the fetch API to make a GET request to your /todos/search endpoint with a query parameter
  fetch(`http://localhost:3000/todos/search?q=${encodeURIComponent(searchTerm)}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(matchingTodos => {
    // Do something with the matching todos
    // Example: displaySearchResults(matchingTodos);
  })
  .catch(error => {
    console.error('Error searching todos:', error);
  });
}
```

## Example Usage

Here's an example of how to use these functions with form elements:

```javascript
// Example of how to tie these functions to UI elements

// Load todos when the page loads
document.addEventListener('DOMContentLoaded', () => {
  getAllTodos();
});

// Add a new todo when a form is submitted
document.getElementById('todo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('todo-title');
  const title = titleInput.value.trim();

  if (title) {
    createTodo(title);
    titleInput.value = '';
  }
});

// Delete a todo when the delete button is clicked
function handleDeleteClick(todoId) {
  if (confirm('Are you sure you want to delete this todo?')) {
    deleteTodo(todoId);
  }
}

// Search todos as the user types in the search box
document.getElementById('search-input').addEventListener('input', (event) => {
  const searchTerm = event.target.value.trim();
  if (searchTerm) {
    searchTodos(searchTerm);
  } else {
    getAllTodos(); // Show all todos when search is empty
  }
});
```