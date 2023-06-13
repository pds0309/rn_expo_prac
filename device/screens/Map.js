import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  const region = {
    // 중앙
    latitude: 37.14,
    longitude: 131.52,
    // 콘텐츠가 얼마나 보일지
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return <MapView style={styles.map} initialRegion={region}></MapView>;
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
