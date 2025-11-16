import StyledText from "@/components/StyledText";
import { COLORS } from "@/constants/ui";
import { View, StyleSheet, } from "react-native";

type HeaderProps = {
  totalTodos: number,
  completedTodos: number,
}

const Header: React.FC<HeaderProps> = ({ totalTodos, completedTodos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerMainContent}>
        <StyledText>Todo App</StyledText>
        <StyledText>November, 16, 2025 </StyledText>
      </View>
        <StyledText>Completed: {completedTodos} / {totalTodos} </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingBottom: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.PRIMARY_BACKGROUND,
  },
  headerMainContent:{
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  }
})

export default Header;