import { View, StyleSheet } from "react-native";
import PlaceList from "../components/place/PlaceList";
import { useIsFocused, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";

const AllPlaces = () => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const [loadedPlace, setLoadedPlace] = useState([]);
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlace((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlaceList placeList={loadedPlace} />;
};

export default AllPlaces;
