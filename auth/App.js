import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import GlobalRoute from "./navs/GlobalRoute";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <GlobalRoute />
      </NavigationContainer>
    </>
  );
}
