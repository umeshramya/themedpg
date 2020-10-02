import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Config from "./src/assets/Config";
import Media from "./src/conference/Media";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Media />
      <Text>Welcome to TheMedPG My student Umesh Bilagi!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    backgroundColor: Config.BGColor,
    alignItems: "center",
    justifyContent: "center"
  }
});
