import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "../../components";
interface SubSlide {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({ subtitle, description, last, onPress }: SubSlide) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}> {subtitle}</Text>
      <Text style={styles.description}> {description}</Text>
      <Button
        label={last ? "Lets get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};

export default SubSlide;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  subtitle: {
    fontFamily: "SFProDisplay-Semibold",
    fontSize: 24,
    color: "#0C0D34",
    lineHeight: 30,
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontFamily: "SFProDisplay-Regular",
    fontSize: 16,
    color: "#545571",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 40,
  },
});
