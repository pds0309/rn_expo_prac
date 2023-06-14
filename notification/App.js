import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
  // 알림을 받을때 트리거된다.
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    // 알림을 수신했을 때 이벤트 핸들러
    const subReceive = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log(notification);
        const username = notification.request.content.data.username;
        console.log(username);
      }
    );
    const subResponseReceive =
      Notifications.addNotificationResponseReceivedListener((notification) => {
        console.log(notification);
        const username =
          notification.notification.request.content.data.username;
        console.log(username);
      });
    return () => {
      subReceive.remove();
      subResponseReceive.remove();
    };
  }, []);
  const handleScheduleNotificationPress = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Local Notifications",
        body: "body",
        data: { username: "Hello" },
      },
      trigger: {
        seconds: 5,
      },
    });
  };
  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={handleScheduleNotificationPress}
      />
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
