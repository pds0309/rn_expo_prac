import { StatusBar } from "expo-status-bar";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
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
  // get user token for push notification
  useEffect(() => {
    async function configPushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;
      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert("Permisson required!!");
        return;
      }
      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
      /**
       * On Android 13, app users must opt-in to receive notifications via a permissions prompt automatically triggered by the operating system.
       * This prompt will not appear until at least one notification channel is created.
       * The setNotificationChannelAsync must be called before getDevicePushTokenAsync or getExpoPushTokenAsync to obtain a push token
       */
      if (Platform.OS === "android") {
        console.log("setNotificationChannel");
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT,
        });
      }
    }
    configPushNotifications();
  }, []);

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

  const handleSendPushNotification = () => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ExponentPushToken[yourdevicetoken]",
        title: "hello pussy",
        body: "world",
      }),
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Schedule Notification"
        onPress={handleScheduleNotificationPress}
      />
      <Button title="Push!" onPress={handleSendPushNotification} />
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
