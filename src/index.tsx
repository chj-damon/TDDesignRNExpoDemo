import { Button } from "@td-design/react-native";
import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="hello expo" onPress={() => Alert.alert('hello expo')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
