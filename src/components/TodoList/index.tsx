import React from 'react'
import TodoItem from '../TodoItem'

interface TodoListProps {
    todos: Array<Todo>
    onDeleteTodo: DeleteTodo
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => (
    <div>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />)}
    </div>
)

export default TodoList