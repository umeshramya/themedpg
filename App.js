import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { BGColor } from "./src/assets/Config";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome to TheMedPG My student Umesh Bilagi!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BGColor,
    alignItems: "center",
    justifyContent: "center"
  }
});
