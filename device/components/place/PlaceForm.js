import { useState } from "react";
import { Text, ScrollView, View, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceForm = () => {
  const [title, setTitle] = useState("");

  const handleTItleChange = (enteredTitle) => {
    setTitle(enteredTitle);
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
