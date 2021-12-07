import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput as BaseInput,
} from "react-native";
import Constants from "expo-constants";
import { Button, Colors, Headline, TextInput } from "react-native-paper";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisble, setIsVisible] = useState(true);

  function handleLogin() {
    console.log("login");
  }

  function navigateToTerms() {
    // navigation.navigate(LoginScreenRoutes.TERMS_SCREEN);
  }
  function toggleSecureIcon() {
    setIsVisible(!isVisble);
  }
  return (
    <View>
      <View style={styles.header}>
        <Headline style={styles.headerText}>SpaceCraft</Headline>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.formField}
          label="Email"
          value={email}
          autoComplete={true}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.formField}
          autoComplete={true}
          label="Password"
          value={password}
          secureTextEntry={isVisble}
          onChangeText={(value) => setPassword(value)}
          right={
            <TextInput.Icon
              onPress={toggleSecureIcon}
              name={isVisble ? "eye-off" : "eye"}
            />
          }
        />
        <Button
          onPress={handleLogin}
          style={styles.submitButton}
          mode="contained"
        >
          Login
        </Button>
        <TouchableOpacity onPress={navigateToTerms}>
          <Text style={styles.tocText}>
            by login you accept the Terms and Conditions.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: { padding: 16 },
  header: {
    paddingTop: Constants.statusBarHeight,
    alignItems: "center",
    justifyContent: "center",
    height: 256,
    backgroundColor: Colors.purple500,
  },
  headerText: {
    color: Colors.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  formField: { margin: 10 },
  submitButton: {
    marginVertical: 32,
    marginHorizontal: 16,
    backgroundColor: Colors.purple500,
  },
  tocText: { textAlign: "center", fontSize: 14, color: Colors.grey500 },
});
