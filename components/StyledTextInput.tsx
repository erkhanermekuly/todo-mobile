import { COLORS } from "@/constants/ui";
import { StyleSheet, TextInput, TextInputProps } from "react-native"

type StyledTextInputProps = TextInputProps &{
    isError?: boolean;
};

const StyledTextInput: React.FC<StyledTextInputProps> = ({ isError, ...props }) => {
    return(
        <TextInput 
        style={[style.input, props.style, isError ? style.error : null]} 
        {...props} 
        placeholderTextColor={COLORS.PLACEHOLDER}
        />
    )
}    

const style = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        color: COLORS.PRIMARY_TEXT,
        borderColor: COLORS.PRIMARY_BORDER,
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
    },
    error: {
        borderColor: COLORS.PRIMARY_RED,
    }
})

export default StyledTextInput;