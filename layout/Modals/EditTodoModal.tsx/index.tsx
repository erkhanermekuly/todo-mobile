import StyledModal from "@/components/StyledModal";
import StyledText from "@/components/StyledText";
import { Todo } from "@/types/todo";
import { View, StyleSheet } from "react-native";

type EditTodoModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (title: string) => void;
    title: Todo["title"];
}

const EditTodoModal: React.FC<EditTodoModalProps> = ({ isOpen, onClose, onUpdate, title }) => {
    return (
        <StyledModal isOpen={isOpen} onClose={onClose}>
            <View style={style.modalContentContainer}>
                <StyledText>Edit todo</StyledText>
            </View>           
        </StyledModal>
    )
}

const style = StyleSheet.create({
    modalContentContainer: {
        gap: 20,
    }
})

export default EditTodoModal;