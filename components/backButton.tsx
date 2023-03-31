import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from "react-native";

const BackButton: React.FC<PressableProps> = ({ children, ...props }) => {
  return (
    <Pressable style={styles.button} {...props}>
      <>
        <Text>Back</Text>
        {children}
      </>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    gap: 2,
  },
});

export default BackButton;
