import { View, Text, StyleSheet } from "react-native";
import { screenStyles } from "../stylesheets/screenStyles";
import Button from "../components/common/Button";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";

const MyPageScreen = () => {
  const dispatch = useDispatch();
  const handleLogoutButtonPress = () => {
    dispatch(logout());
  };
  return (
    <View style={screenStyles.screenContainer}>
      <Text>MyPageScreen</Text>
      <Button onPress={handleLogoutButtonPress}>Logout</Button>
    </View>
  );
};

export default MyPageScreen;
