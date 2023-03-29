import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

const Card: React.FC<TouchableOpacityProps> = (props) => {
  return <TouchableOpacity style={styles.card} {...props} />;
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "none",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
  },
});

export default Card;
