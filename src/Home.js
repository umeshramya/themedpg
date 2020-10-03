import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.style}>
      <Text>Home</Text>
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
