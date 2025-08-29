import { SignUpUserDetails } from "@/Types/SignUpUserDetails";
import { Link, useRouter } from "expo-router";
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

export default function SignUp() {
  const navigate = useRouter();

  const [userDetails, setUserDetails] = React.useState<SignUpUserDetails>({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [isSubmit, setIsSubmit] = React.useState<boolean>(false);

  const handlePress = () => {
    setIsSubmit(true);
    if (userDetails.password !== userDetails.confirmPassword) {
      alert("Passwords do not match");
      setIsSubmit(false);
      return;
    }
    console.log("User Details: ", userDetails);
    setUserDetails({
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
    alert("User Registered Successfully");
    navigate.navigate("/auth/login");
    setIsSubmit(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <View style={styles.loginContainer}>
          <Text style={styles.loginHeading}>Sign Up</Text>
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
            placeholder="Enter your Email"
            value={userDetails.email}
            onChangeText={(text: string) =>
              setUserDetails({ ...userDetails, email: text })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Phone Number"
            maxLength={10}
            keyboardType="phone-pad"
            value={userDetails.phoneNumber}
            onChangeText={(text: string) =>
              setUserDetails({ ...userDetails, phoneNumber: text })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter Password"
            maxLength={20}
            value={userDetails.password}
            secureTextEntry
            onChangeText={(text: string) =>
              setUserDetails({ ...userDetails, password: text })
            }
          />
          <TextInput
            style={styles.textInput}
            placeholder="Re-type Password"
            maxLength={20}
            value={userDetails.confirmPassword}
            secureTextEntry
            onChangeText={(text: string) =>
              setUserDetails({ ...userDetails, confirmPassword: text })
            }
          />
          <Link href="/auth/login" asChild>
            <Pressable>
              <Button
                title={isSubmit ? "Submitting" : "Sign Up"}
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
    padding: 10,
    marginBottom: 20,
    maxWidth: 300,
    minWidth: 220,
    width: "100%",
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "400",
  },
});
