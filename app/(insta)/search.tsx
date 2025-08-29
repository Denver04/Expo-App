import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Search() {
  return (
    <View>
      <Text>Search Page</Text>
      <Link href="/(insta)/profile" asChild>
        <Pressable>
          <Button title={"go to profile"} />
        </Pressable>
      </Link>
    </View>
  );
}
