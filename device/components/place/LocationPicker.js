import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";
import {
  convertCoordinateToAddress,
  getPreviewLocation,
} from "../../utils/location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

const LocationPicker = ({ onPickLocation }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInfo, requestPermission] =
    useForegroundPermissions();

  useEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    if (!pickedLocation) {
      return;
    }
    (async () => {
      const address = await convertCoordinateToAddress(pickedLocation);
      onPickLocation(pickedLocation, address);
    })();
  }, [pickedLocation]);

  const verifyPermissions = async () => {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "위치 허용해야 사용할 수 있어요",
        [
          {
            text: "취소",
          },
          {
            text: "허용하기",
            onPress: requestPermission,
          },
        ]
      );
      return false;
    }
    return true;
  };

  const handleGetLoactionPress = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    // TODO: Check Options!!
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };
  const handlePickOnMapPress = () => {
    navigation.navigate("Map");
  };
  return (
    <View>
      <View style={styles.mapPreview}>
        {!pickedLocation ? (
          <Text style={styles.emptyLocationText}>No Location</Text>
        ) : (
          <Image
            style={styles.previewLocationImage}
            source={{ uri: getPreviewLocation(pickedLocation) }}
          />
        )}
      </View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={handleGetLoactionPress}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={handlePickOnMapPress}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyLocationText: {
    color: "white",
  },
  previewLocationImage: {
    width: "100%",
    height: "100%",
  },
});
