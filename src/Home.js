import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.style}>
      <Text>Home</Text>
      <Button
        title="Login"
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      />
      <Text></Text>

      <Button
        title="Live Class"
        onPress={() => {
          props.navigation.navigate("Login");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
