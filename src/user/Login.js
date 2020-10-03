// Login Screen component
import React from "react";
import { View, Text } from "react-native";

const Login = props => {
  return (
    <View style={styles.style}>
      <Text>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  style: { flex: 1, alignItems: "center", justifyContent: "center" }
});
