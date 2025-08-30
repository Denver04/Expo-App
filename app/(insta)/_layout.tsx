import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button, SafeAreaView } from "react-native";
import { useThemeContext } from "@/ColorModeContext/ColorContext";

export default function InstaLayout() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerStyle: {
            backgroundColor: theme === "light" ? "#6e1b1bff" : "#222",
          },
          headerRight: () => {
            return (
              <Button title="Toggle" onPress={toggleTheme} color="#000000ff" />
            );
          },
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            headerShown: true,
            tabBarLabel: "Profile",
            tabBarIcon: () => <AntDesign name="user" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <FontAwesome name="search" size={24} color="black" />
              ) : (
                <EvilIcons name="search" size={24} color="black" />
              ),
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            headerShown: true,
            tabBarLabel: "Explore",
            tabBarIcon: () => (
              <MaterialIcons name="explore" size={24} color="black" />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
