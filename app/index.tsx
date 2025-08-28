import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  const image = require("@/assets/images/react-logo.png");
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Link href="/auth/sign-up" asChild>
        <Button title="Sign-up" />
      </Link>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
