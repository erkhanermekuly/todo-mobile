import { COLORS } from "@/constants/ui";
import Header from "@/layout/Header";
import { useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Todo } from "@/types/todo";
import TodoList from "@/layout/TodoList";

const defaultTodos: Todo[] = [
    {
        id: 1,
        title: "Learn React Native",
        isCompleted: false,
    },
    {
        id: 2,
        title: "Build a Todo App",
        isCompleted: false,
    },
    {
        id: 3,
        title: "Test the App",
        isCompleted: true,
    },
];

export default function Index(){
    const [todo, setTodo] = useState<Todo[]>(defaultTodos)

    const completedTodos = todo.filter((todo) => todo.isCompleted)

    return(
        <View 
        style={styles.container}
        >
            <StatusBar barStyle={"default"} />
            <Header totalTodos={todo.length} completedTodos={completedTodos.length} />
            <TodoList todos={todo} />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.SECONDARY_BACKGROUND,
    }
});