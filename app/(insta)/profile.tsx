import { useThemeContext } from "@/ColorModeContext/ColorContext";
import { Link } from "expo-router";
import { Button, Pressable, Text, View } from "react-native";

export default function Profile() {
  const { colors } = useThemeContext();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text
        style={{
          color: colors.text,
          fontSize: 20,
          fontWeight: "bold",
          margin: 10,
        }}
      >
        Profile Page
      </Text>
      <Link href="/(insta)/explore" asChild>
        <Pressable>
          <Button title={"go to Explore"} />
        </Pressable>
      </Link>
    </View>
  );
}
