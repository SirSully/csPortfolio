import * as React from "react";
import { Text, View, StyleSheet, Animated } from "react-native";

class SubTitleAnimator extends React.Component {
  animatedValues = [];
  animatedColorValues = [];
  animations = [];

  constructor(props) {
    super(props);

    const textArr = props.content.trim().split(" ");
    this.animatedColorValues = textArr.map(() => new Animated.Value(0));

    textArr.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0);
    });

    this.textArr = textArr;
  }

  componentDidMount() {
    this.animate(1);
  }

  componentWillUnmount() {
    this.animate(0);
  }

  animate(toValue = 1) {
    this.toValue = toValue;
    this.animations = this.textArr.map((_, i) => {
      // Fade-in animation
      const fadeInAnimation = Animated.timing(this.animatedValues[i], {
        toValue,
        duration: this.props.timing,
        useNativeDriver: false,
      });

      // Color change animation
      const colorChangeAnimation = Animated.timing(
        this.animatedColorValues[i],
        {
          toValue, // Change color only for the last two elements
          duration: this.props.timing,
          useNativeDriver: false,
        }
      );

      // Chain animations using Animated.sequence
      return Animated.sequence([
        Animated.delay(this.props.delay),
        fadeInAnimation,
        colorChangeAnimation,
      ]);
    });

    Animated.stagger(
      this.props.timing / 5,
      toValue === 0 ? this.animations.reverse() : this.animations
    ).start(() => {
      // No need for a timeout or recursive call
      if (this.props.onFinish) {
        this.props.onFinish(toValue === 1);
      }
    });
  }

  render() {
    return (
      <View style={[this.props.style, styles.textWrapper]}>
        {this.textArr.map((v, i) => {
          return (
            <Animated.Text
              key={`${v}-${i}`}
              style={[
                this.props.textStyle,
                styles.textStyle,
                {
                  opacity: this.animatedValues[i],
                  transform: [
                    {
                      translateY: Animated.multiply(
                        this.animatedValues[i],
                        new Animated.Value(-2)
                      ),
                    },
                  ],
                  color: this.animatedColorValues[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: [this.props.color1, this.props.color2], // Adjust the colors as needed
                  }),
                },
              ]}
            >
              {v}
              {`${i < this.textArr.length ? " " : ""}`}
            </Animated.Text>
          );
        })}
      </View>
    );
  }
}

SubTitleAnimator.defaultProps = {
  timing: 600,
  content: "",
};

export default SubTitleAnimator;

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  textStyle: {
    // Additional styling if needed
  },
});
