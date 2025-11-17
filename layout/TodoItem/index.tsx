import { View, StyleSheet, Vibration } from "react-native";
import { COLORS } from "@/constants/ui";
import StyledText from "@/components/StyledText";
import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";
import { Todo } from "@/types/todo";
import { useState } from "react";
import EditTodoModal from "@/layout/Modals/EditTodoModal";
import DeleteTodoModal from "@/layout/Modals/DeleteTodoModal";

type TodoItemProps = Todo & {
    onCheckTodo: (id: Todo["id"]) => void;
    onDeleteTodo: (id: Todo["id"]) => void;
    onUpdateTodoTitle: (id: Todo["id"], title: Todo["title"]) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ 
    id, 
    title, 
    isCompleted, 
    onCheckTodo, 
    onDeleteTodo, 
    onUpdateTodoTitle 
}) => {

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const onPressDeleteModal = () => {
        setIsDeleteModalOpen(true);
    }

    // const onConfirmDelete2 = () => {
    //     onDeleteTodo(id);
    // }

    const onConfirmDelete = () => {
        onDeleteTodo(id);
        setIsDeleteModalOpen(false);
        Vibration.vibrate(50);
    }

    const onPressCheck = () => {
        onCheckTodo(id);
    }

    
    return (
      <View style={[styles.container]}>
        <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onCheck={onPressCheck} />
        <StyledText style={[
            { textDecorationLine: isCompleted ? 'line-through' : 'none' }
        ]}>{title}</StyledText>
        </View>
        <View style={styles.buttonsContainer}>
            <StyledButton 
                icon="pencil" 
                size="small" 
                onPress={() => setIsEditModalOpen(true)}
            />
            <EditTodoModal 
                title={title} 
                isOpen={isEditModalOpen} 
                onClose={() => setIsEditModalOpen(false)} 
                onUpdate={(title) => onUpdateTodoTitle(id, title)}
            />
            <StyledButton 
                icon="trash" 
                size="small" 
                variant="delete"
                onPress={ onPressDeleteModal}
            />
            <DeleteTodoModal 
                isOpen={isDeleteModalOpen} 
                onClose={() => setIsDeleteModalOpen(false)} 
                onDelete={onConfirmDelete} 
            />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        padding: 15,
        marginVertical: 8,
        backgroundColor: COLORS.PRIMARY_BACKGROUND,
    },
    checkTitleContainer:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        gap: 5,
    }
})

export default TodoItem;