type Todo = {
    text: string;
    id: number;
};

type AddTodo = (todo: string) => void;

type DeleteTodo = (todo: Todo) => void