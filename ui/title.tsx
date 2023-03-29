import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

const Title: React.FC<TextProps> = (props) => {
  return <Text style={styles.title} {...props} />;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
  },
});

export default Title;
