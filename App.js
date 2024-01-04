import * as React from "react";
import { StatusBar, Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import TextAnimator from "./components/TextAnimator";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <TextAnimator
          content="Hell️️️o, my name is Craig Sullivan."
          textStyle={styles.textStyle}
          style={styles.containerStyle}
          timing={500}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  containerStyle: {},
  textStyle: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Menlo",
    marginBottom: 14,
  },
});
