import React, { ChangeEvent, FormEvent, useState } from 'react'

interface AddTodoFormProps {
    onAddTodo: AddTodo
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
    const [inputVal, setInputVal] = useState<string>('')

    const handleInputValChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault()
        onAddTodo(inputVal)
        setInputVal('')
    }

    return <form onSubmit={handleSubmit}>
        <input value={inputVal} onChange={handleInputValChange} />
        <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
}

export default AddTodoForm