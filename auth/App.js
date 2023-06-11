import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import GlobalRoute from "./navs/GlobalRoute";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NavigationContainer>
          <GlobalRoute />
        </NavigationContainer>
      </Provider>
    </>
  );
}
