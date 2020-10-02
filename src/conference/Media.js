import React from "react";
import { View, StyleSheet } from "react-native";

export default function Media(props) {
  return <View style={styles.Container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: "#0099ff",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center"
  }
});
