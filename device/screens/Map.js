import { useNavigation } from "@react-navigation/native";
import { useCallback, useLayoutEffect, useState } from "react";
import { Alert } from "react-native";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const navigation = useNavigation();
  const region = {
    // 중앙
    latitude: 37.14,
    longitude: 131.52,
    // 콘텐츠가 얼마나 보일지
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const handleSelectLocationPress = (event) => {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;
    setSelectedLocation({ latitude, longitude });
  };

  const handleSaveLocationPress = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert("no location picked");
      return;
    }
    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.latitude,
      pickedLng: selectedLocation.longitude,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={handleSaveLocationPress}
        />
      ),
    });
  }, [navigation, handleSaveLocationPress]);

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={handleSelectLocationPress}
    >
      {selectedLocation && (
        <Marker title="Picked Location" coordinate={selectedLocation} />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
