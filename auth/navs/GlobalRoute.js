import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";

const Stack = createNativeStackNavigator();

const GlobalRoute = () => {
  const hasAuth = false;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation">
        {() => <BottomNavigation hasAuth={hasAuth} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default GlobalRoute;
