import { Text, StyleSheet, View } from "react-native";

export default function AboutScreen (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Screen</Text>
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
});