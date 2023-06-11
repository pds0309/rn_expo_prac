import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import WelcomeScreen from "../screens/WelcomScreen";
import MyPageScreen from "../screens/MypageScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "../constants/styles";

const BottomTabs = createBottomTabNavigator();

/**
 *
 * @param {boolean} hasAuth
 */
const BottomNavigation = ({ hasAuth }) => {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary1 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary1 },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: GlobalStyles.colors.darkGray,
      })}
    >
      {hasAuth ? (
        <>
          <BottomTabs.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              title: "Welcome",
              tabBarLabel: "Welcome",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="airplane" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="MypageScreen"
            component={MyPageScreen}
            options={{
              title: "Mypage",
              tabBarLabel: "Mypage",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />
        </>
      ) : (
        <>
          <BottomTabs.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: "Login",
              tabBarLabel: "Login",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="log-in" size={size} color={color} />
              ),
            }}
          />
          <BottomTabs.Screen
            name="SignupScreen"
            component={SignupScreen}
            options={{
              title: "Sign up",
              tabBarLabel: "Signup",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person-add" size={size} color={color} />
              ),
            }}
          />
        </>
      )}
    </BottomTabs.Navigator>
  );
};

export default BottomNavigation;
