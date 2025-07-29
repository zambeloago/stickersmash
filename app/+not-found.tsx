import { View, StyleSheet } from  'react-native';
import { Link, Stack}  from 'expo-router';

export default function NotFoundScreen(){
    return (
        <>
            <Stack.Screen options={{title: "Oops! Not Found"}}/>
            <View style={styles.container}>
                <Link href="/(tabs)/index" style={styles.link}>Return to Home Screen</Link>
            </View>
        </>
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