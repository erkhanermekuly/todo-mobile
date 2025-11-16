//onPress

//Для кпроссплатформенной кнопки со стилями Можно использовать TouchableOpacity, Pressable и т.д.

import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import StyledText from "./StyledText";
import { COLORS } from "@/constants/ui";
import { Ionicons } from "@expo/vector-icons";


type StyledButtonProps = TouchableOpacityProps &{
    label?: string;
    icon?: React.ComponentProps<typeof Ionicons>["name"];
    size?: "default" | "large" | "small";
    variant?: "primary" | "delete";
}

const StyledButton: React.FC<StyledButtonProps> = ({
    label, 
    icon, 
    size, 
    variant = "primary", 
    ...props
}) => {
    return (
        <TouchableOpacity style={[styles.base, 
        size === "small" ? styles.small: null,
        variant === "delete" ? styles.delete : null,
        ]} {...props} >
            {label && <StyledText>{label}</StyledText>}
            {icon && <Ionicons name={icon} size={14} color={COLORS.PRIMARY_TEXT}/>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: COLORS.PRIMARY_ACTIVE_BUTTON,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    //Sizes
    small:{
        paddingHorizontal: 12,
        paddingVertical: 12,
    },
    //Variants
    delete: {
        backgroundColor: COLORS.PRIMERY_RED,
    }
})

export default StyledButton;