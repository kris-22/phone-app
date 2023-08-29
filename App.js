import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TopBar from "./components/top-bar";
import Content from "./components/content";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>witam hahah</Text> */}
      <TopBar />
      <Content />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    alignItems: "center",
    justifyContent: "center",
  },
});
