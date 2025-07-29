import { View, StyleSheet } from "react-native";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@assets/images/background-image.png");

export default function Index() {
  return (
    <View style = {styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: "black",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        elevation: 2,

    },
    text: {

        color: "white"
    },
    link: {
        textDecorationLine: "underline",
        color: "white",
    }

});