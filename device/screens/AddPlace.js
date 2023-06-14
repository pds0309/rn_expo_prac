import { View, StyleSheet } from "react-native";
import PlaceForm from "../components/place/PlaceForm";
import { useNavigation } from "@react-navigation/native";

const AddPlace = () => {
  const navigation = useNavigation();
  const onCreatePlace = (place) => {
    navigation.navigate("AllPlaces", {
      place,
    });
  };
  return <PlaceForm onCreatePlace={onCreatePlace} />;
};

export default AddPlace;
