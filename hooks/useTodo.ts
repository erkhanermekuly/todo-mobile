import { Todo } from "@/types/todo";
import { useState } from "react";

const defaultTodos: Todo[] = [
    {
        id: 1,
        title: "Learn React Native",
        isCompleted: true,
    },
    {
        id: 2,
        title: "Build a Todo App",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Test the App",
        isCompleted: false,
    },
];

const useTodo = () => {

 const [todo, setTodo] = useState<Todo[]>(defaultTodos)

 const onAddTodo = (title: Todo["title"]) => {
        setTodo([...todo, { id: Number(new Date()), title, isCompleted: false,}])
    }

    const onDeleteTodo = (id: Todo["id"]) => {
        setTodo(todo.filter((todo) => todo.id !== id));
    }

    const onCheckTodo = (id: Todo["id"]) => {
        setTodo(todo.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)))
    } 

    const onUpdateTodoTitle = (id: Todo["id"], title: Todo["title"]) => {
        setTodo(todo.map((todo) => (todo.id === id ? { ...todo, title } : todo)))
    }

    const completedTodos = todo.filter((todo) => todo.isCompleted)

    return {
        todo,
        onAddTodo,
        onDeleteTodo,
        onCheckTodo,
        onUpdateTodoTitle,
        completedTodos,
    }
};

export default useTodo; 