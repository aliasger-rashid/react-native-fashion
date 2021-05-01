import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;

interface SlideProps {
  title: string;
  right?: boolean;
}
const styles = StyleSheet.create({
  container: {
    width,
  },
  titleContainer: {
    // flex: 1,
    // justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontFamily: "SFProDisplay-Bold",
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
});

const Slide = ({ title, right }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.titleContainer,
          {
            transform,
          },
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Slide;
