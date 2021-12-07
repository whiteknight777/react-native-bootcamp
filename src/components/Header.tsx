// ./src/components/Header.tsx
import { View, StyleSheet, Text } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
});
