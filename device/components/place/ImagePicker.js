import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = ({ onTakeImage }) => {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "카메라 허용해야 사용할 수 있어요"
      );
      return false;
    }
    return true;
  };

  const handleTakeImageButtonPress = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    const imageUrl = image.assets[0].uri;
    setPickedImage(imageUrl);
    onTakeImage(imageUrl);
  };
  return (
    <View>
      <View>
        {!pickedImage ? (
          <Text>No Image Taken Yet!</Text>
        ) : (
          <View style={styles.imagePreview}>
            <Image style={styles.image} source={{ uri: pickedImage }} />
          </View>
        )}
      </View>
      <OutlinedButton icon="camera" onPress={handleTakeImageButtonPress}>
        Take Image
      </OutlinedButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
