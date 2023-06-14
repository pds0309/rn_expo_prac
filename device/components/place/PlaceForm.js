import { useState } from "react";
import {
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { Place } from "../../models/place";

const PlaceForm = ({ onCreatePlace }) => {
  const [title, setTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState();

  const handleTItleChange = (enteredTitle) => {
    setTitle(enteredTitle);
  };

  const handleSavePlacePress = () => {
    const placeData = new Place(title, selectedImage, pickedLocation);
    onCreatePlace(placeData);
  };

  const onTakeImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const onPickLocation = (location, address) => {
    setPickedLocation({ ...location, address });
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={handleTItleChange}
        />
      </View>
      <ImagePicker onTakeImage={onTakeImage} />
      <LocationPicker onPickLocation={onPickLocation} />
      <Button title="Add Place" onPress={handleSavePlacePress} />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary50,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    fontSize: 16,
  },
});
