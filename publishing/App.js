import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { HELLO } from "./utils/constants";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{HELLO} - work </Text>
      <Text>{process.env.HELLO} - not work</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
