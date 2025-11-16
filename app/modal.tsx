import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import StyledText from '@/components/StyledText';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>This is a modal</StyledText>
      <Link href="/" dismissTo style={styles.link}>
        <StyledText style={styles.linkText}>Go to home screen</StyledText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  link: {
    marginTop: 8,
    paddingVertical: 8,
  },
  linkText: {
    color: '#007aff',
    fontSize: 16,
  },
});
