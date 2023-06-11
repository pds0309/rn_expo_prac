import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const GlobalRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="BottomNavigation">
        {() => <BottomNavigation hasAuth={isAuthenticated} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default GlobalRoute;
