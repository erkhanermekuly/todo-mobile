import { View, StyleSheet } from "react-native";
import { COLORS } from "@/constants/ui";
import StyledText from "@/components/StyledText";
import StyledButton from "@/components/StyledButton";

type TodoItemProps = {
    title: string;
    isCompleted: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
    return (
      <View style={[styles.container]}>
        <StyledText style={[
            { textDecorationLine: isCompleted ? 'line-through' : 'none' }
        ]}>{title}</StyledText>
        <View style={styles.buttonsContainer}>
            <StyledButton icon="pencil" size="small" />
            <StyledButton icon="trash" size="small" variant="delete"/>
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
    buttonsContainer: {
        flexDirection: "row",
        gap: 5,
    }
})

export default TodoItem;