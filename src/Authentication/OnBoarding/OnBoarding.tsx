import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";

import Slide, { SLIDE_HEIGHT } from "./Slide";
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  slider: {
    height: SLIDE_HEIGHT,
    //backgroundColor: "#BFEAF5",
    borderBottomRightRadius: 75,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 75,
  },
});

const OnBoarding = () => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: [0, width, width * 2, width * 3],
    outputRange: ["#D8F3FF", "#B8ECDF", "#FFE4D9", "#FFDDDD"],
  });
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          horizontal
          bounces={false}
          decelerationRate="fast"
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          <Slide title="Relaxed" />
          <Slide title="Playful" right />
          <Slide title="Excentric" />
          <Slide title="Funky" right />
        </Animated.ScrollView>
      </Animated.View>
      <View style={[styles.footer]}>
        <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor }]} />
        <View style={styles.footerContent} />
      </View>
    </View>
  );
};

export default OnBoarding;
