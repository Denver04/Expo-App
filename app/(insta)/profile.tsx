import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Profile() {
  return (
    <View>
      <Text>Profile Page</Text>
      <Link href="/(insta)/explore" asChild>
        <Pressable>
          <Button title={"go to Explore"} />
        </Pressable>
      </Link>
    </View>
  );
}
