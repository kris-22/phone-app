import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>witam w testowej apce😁</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    height: 80,
    width: "100%",
    backgroundColor: "#F7DA77",
    shadowColor: "#000000",
    shadowOffset: {
      width: 3,
      height: 9,
    },
    shadowOpacity: 0.22,
    shadowRadius: 9.22,
    elevation: 12,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
