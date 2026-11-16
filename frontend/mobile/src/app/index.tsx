import { Text, View, StyleSheet } from "react-native";
import { Home } from "lucide-react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Home />
      <Text className="bg-red-500">
        Edit src/app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
