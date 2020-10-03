import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Media(props) {
  return (
    <View style={styles.Container}>
      <Text>Media</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0099ff",
    width: "100%",
    height: "30%",
    alignItems: "center",
    justifyContent: "center"
  }
});
