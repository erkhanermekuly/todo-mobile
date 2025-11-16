import { View, StyleSheet } from "react-native";
import { COLORS } from "@/constants/ui";
import StyledText from "@/components/StyledText";
import StyledButton from "@/components/StyledButton";
import StyledCheckbox from "@/components/StyledCheckbox";

type TodoItemProps = {
    title: string;
    isCompleted: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, isCompleted }) => {
    return (
      <View style={[styles.container]}>
        <View style={styles.checkTitleContainer}>
        <StyledCheckbox checked={isCompleted} onCheck={() => {}} />
        <StyledText style={[
            { textDecorationLine: isCompleted ? 'line-through' : 'none' }
        ]}>{title}</StyledText>
        </View>
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