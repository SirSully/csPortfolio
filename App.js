import * as React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Constants from "expo-constants";
import SubTitleAnimator from "./components/SubTitleAnimator";
import ButtonAnimator from "./components/ButtonAnimator";
import { Button } from "react-native-web";

const baseTextColor = "#457b9d";
const accentTextColor = "#e63946";
const secondaryTextColor = "#a8dadc";
const appBackgroundColor = "#f1faee"; // Background color variable

export default class App extends React.Component {
  state = {
    translateY: new Animated.Value(0),
  };

  handleButtonClick = () => {
    // Animate moving "Craig Sullivan" to the top
    console.log("Button clicked");
    // Animated.timing(this.state.translateY, {
    //   toValue: -200, // Adjust the target value to move to the top
    //   duration: 500,
    //   useNativeDriver: true, // Set to true for better performance
    // }).start();
  };

  render() {
    const { translateY } = this.state;
    return (
      <View style={[styles.container, { backgroundColor: appBackgroundColor }]}>
        <StatusBar hidden />
        <SubTitleAnimator
          key={"hello"}
          content="Hello, my name is"
          textStyle={styles.textStyle}
          style={styles.containerStyle}
          timing={500}
          delay={0}
          color1={baseTextColor}
          color2={secondaryTextColor}
        />
        <Animated.View style={{ transform: [{ translateY }] }}>
          <SubTitleAnimator
            key={"craig"}
            content="Craig Sullivan"
            textStyle={styles.textStyle}
            style={styles.containerStyle}
            timing={500}
            delay={500}
            color1={baseTextColor}
            color2={accentTextColor}
          />
        </Animated.View>
        <SubTitleAnimator
          key={"iAm"}
          content="I am a full stack developer,"
          textStyle={styles.textStyle}
          style={styles.containerStyle}
          timing={700}
          delay={2500}
          color1={baseTextColor}
          color2={secondaryTextColor}
        />
        <SubTitleAnimator
          key={"letsBuild"}
          content="Let's build something together!"
          textStyle={styles.textStyle}
          style={styles.containerStyle}
          timing={700}
          delay={4500}
          color1={baseTextColor}
          color2={secondaryTextColor}
        />
        <ButtonAnimator
          key={"aboutMe"}
          content="About Me"
          textStyle={styles.buttonStyle}
          style={styles.containerStyle}
          timing={500}
          delay={6000}
          color1={accentTextColor}
          color2={baseTextColor}
          onClick={this.handleButtonClick}
        />
        <ButtonAnimator
          key={"resume"}
          content="Resume"
          textStyle={styles.buttonStyle}
          style={styles.containerStyle}
          timing={500}
          delay={6500}
          color1={accentTextColor}
          color2={baseTextColor}
        />
        <ButtonAnimator
          key={"projects"}
          content="Projects"
          textStyle={styles.buttonStyle}
          style={styles.containerStyle}
          timing={500}
          delay={7000}
          color1={accentTextColor}
          color2={baseTextColor}
        />
        <ButtonAnimator
          key={"contactMe"}
          content="Contact Me"
          textStyle={styles.buttonStyle}
          style={styles.containerStyle}
          timing={500}
          delay={7500}
          color1={accentTextColor}
          color2={baseTextColor}
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
    padding: 8,
  },
  containerStyle: {},
  textStyle: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Menlo",
    marginBottom: 15,
  },
  buttonStyle: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Menlo",
    marginBottom: 15,
  },
});
