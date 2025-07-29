import { ImageSourcePropType, StyleSheet } from 'react-native';
import { Image } from "expo-image";

type Props = {
    imgSource: ImageSourcePropType;
};

export default function Imageviewer({imgSource}: Props) {
    return (
        <Image source ={imgSource} style={styles.image}></Image>
    );
}


const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
