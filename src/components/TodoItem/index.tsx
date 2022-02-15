import React from 'react'

interface TodoItemProps {
    todo: Todo
    onDeleteTodo: DeleteTodo
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo }) => {

    const handleDeleteTodoClick = () => {
        onDeleteTodo(todo)
    }

    return <div>
        <span>{todo.text}</span>
        <button onClick={handleDeleteTodoClick} aria-label="delete">X</button>
    </div>
}

export default TodoItem