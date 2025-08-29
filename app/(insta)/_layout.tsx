import { Tabs } from "expo-router";

import { SafeAreaView } from "react-native";

export default function InstaLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen
          name="profile"
          options={{ headerShown: true, tabBarLabel: "Profile" }}
        />
        <Tabs.Screen name="search" options={{ tabBarLabel: "Search" }} />
        <Tabs.Screen
          name="explore"
          options={{ headerShown: true, tabBarLabel: "Explore" }}
        />
      </Tabs>
    </SafeAreaView>
  );
}
