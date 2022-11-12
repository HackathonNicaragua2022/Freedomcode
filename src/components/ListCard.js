import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Data = [
  {
    id: "1",
    image: require("../assets/1.png"),
  },
  {
    id: "2",
    image: require("../assets/2.png"),
  },
  {
    id: "3",
    image: require("../assets/3.png"),
  },
  {
    id: "4",
    image: require("../assets/4.png"),
  },
];

const ImageCard = ({ image }) => (
  <TouchableOpacity style={styles.ImageContainer}>
    <Image source={image} style={styles.image} />
  </TouchableOpacity>
);

const ListCard = () => {
  const renderItem = ({ item }) => <ImageCard image={item.image} />;
  return (
    <View>
      <FlatList
        numColumns={2}
        data={Data}
        contentContainerStyle={{ margin: 20 }}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 108,
  },
  ImageContainer: {
    margin: 10,
    width: 150,
    height: 200,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});
