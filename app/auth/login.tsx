import { LoginUserDetails } from "@/Types/LoginUserDetails";
import { Link } from "expo-router";
import React from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  const [userDetails, setUserDetails] = React.useState<LoginUserDetails>({
    username: "",
    password: "",
  });

  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);

  const handlePress = () => {
    setIsSubmit(true);
    console.log("User Details: ", userDetails);
    setUserDetails({ username: "", password: "" });
    setIsSubmit(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.loginHeading}>Login</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Username"
            value={userDetails.username}
            onChangeText={(text: string) =>
              setUserDetails({ ...userDetails, username: text })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            value={userDetails.password}
            secureTextEntry
            onChangeText={(text: string) =>
              setUserDetails({ ...userDetails, password: text })
            }
          />
          <Link href="/" asChild>
            <Pressable>
              <Button
                title={isSubmit ? "Submitting..." : "Login"}
                onPress={handlePress}
                disabled={isSubmit}
              />
            </Pressable>
          </Link>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    // borderWidth: 1,
    padding: 40,
    borderRadius: 10,
    backgroundColor: "gainsboro",
  },
  loginHeading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    maxWidth: 300,
    minWidth: 220,
    borderRadius: 5,
    fontSize: 18,
    fontWeight: "400",
  },
});
