import { COLORS } from "@/constants/ui";
import Header from "@/layout/Header";
import { View, StyleSheet, StatusBar } from "react-native";
import TodoList from "@/layout/TodoList";
import TodoCreator from "@/layout/TodoCreator";
import useTodo from "@/hooks/useTodo";

export default function Index(){

    const { todo, onAddTodo, onDeleteTodo, onCheckTodo, onUpdateTodoTitle, completedTodos } = useTodo();

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