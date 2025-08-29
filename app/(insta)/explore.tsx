import { Link } from "expo-router";
import { Button, Pressable, SafeAreaView, Text, View } from "react-native";

export default function Explore() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Explore Page</Text>
      <Link href="/(insta)/search" asChild>
        <Pressable>
          <Text>go to Search</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
