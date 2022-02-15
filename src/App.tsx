import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([])

  const handleAddTodo: AddTodo = (newTodo) => {
    setTodos((todos) => ([
      ...todos,
      {
        text: newTodo,
        id: Date.now()
      }
    ]))
  }

  const handleDeleteTodo: DeleteTodo = (todoToDel) => {
    setTodos((todos) => (
      todos.filter((todo) => todo.id !== todoToDel.id)
    ))
  }

  return (
    <div>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
