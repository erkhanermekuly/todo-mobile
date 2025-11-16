import StyledButton from "@/components/StyledButton";
import StyledTextInput from "@/components/StyledTextInput";
import { COLORS } from "@/constants/ui";
import { Todo } from "@/types/todo";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native"

type TodoCreatorProps = {
    onAddTodo: (title: Todo["title"]) => void;
}

const TodoCreator: React.FC<TodoCreatorProps> = ({ onAddTodo } ) => {
    const [text, setText] = useState("");
    const [inputError, setInputError] = useState(false);

    const onPressAdd = () => {
        if(!text){
            setInputError(true);
            return;
        }
        onAddTodo(text);
        setText("");
    }

    useEffect(() => {
        if(inputError && text){
            setInputError(false);
        }
    }, [inputError, text]);

    return(
        <View style={style.container}>
            <StyledTextInput 
                placeholder="Add a task..." 
                value={text}
                onChangeText={setText}
                isError={inputError}
            /> 
            <StyledButton label="+" onPress={onPressAdd} disabled={inputError} size="large"/>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 20,
        paddingHorizontal: 10,
        gap: 10
    }
})

export default TodoCreator;