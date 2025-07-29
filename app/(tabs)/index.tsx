import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import ImageViewer from "@/components/ImageViewer";

export default function Index() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Home Screen</Text>
        <Link style = {styles.link} href = "/about">Go to About Screen</Link>
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