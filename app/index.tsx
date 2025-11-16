import { COLORS } from "@/constants/ui";
import Header from "@/layout/Header";
import { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Todo } from "@/types/todo";
import TodoList from "@/layout/TodoList";
import TodoCreator from "@/layout/TodoCreator";

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

export default function Index(){
    const [todo, setTodo] = useState<Todo[]>(defaultTodos)

    const onAddTodo = (title: Todo["title"]) => {
        setTodo([...todo, { id: todo.length + 1, title, isCompleted: false,}])
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

    return(
        <View 
        style={styles.container}
        >
            <StatusBar barStyle={"default"} />
            <Header totalTodos={todo.length} completedTodos={completedTodos.length} />
            <TodoCreator onAddTodo={onAddTodo} />
            <TodoList todos={todo} onCheckTodo={onCheckTodo} onDeleteTodo={onDeleteTodo} onUpdateTodoTitle={onUpdateTodoTitle} />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.SECONDARY_BACKGROUND,
    }
});