import { ColorContext, useThemeContext } from "@/ColorModeContext/ColorContext";
import { Stack } from "expo-router";
import { SafeAreaView, Button } from "react-native";

function ThemedLayout() {
  const {colors, toggleTheme } = useThemeContext();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.background }}
    >
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerTintColor: colors.text,
          headerRight: () => {
            return <Button title="Toggle" onPress={toggleTheme} color={colors.primary} />;
          }
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: true }} />
        <Stack.Screen name="auth/login" options={{ title: "Login" }} />
        <Stack.Screen name="auth/sign-up" options={{ title: "Sign Up" }} />
        <Stack.Screen name="(insta)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

export default function RootLayout() {
  return (
    <ColorContext>
      <ThemedLayout />
    </ColorContext>
  );
}
