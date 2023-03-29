import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

type CheckBoxProps = {
  isChecked?: boolean;
  name: string;
};

const CheckBox: React.FC<CheckBoxProps> = ({ isChecked = false, name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <TouchableOpacity style={styles.box}>
        {isChecked && <View style={styles.boxChecked}></View>}
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  box: {
    height: 20,
    width: 20,
    padding: 2,
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  boxChecked: {
    height: "100%",
    width: "100%",
    flex: 1,
    backgroundColor: "#000",
    borderRadius: 2.5,
  },
  name: {
    fontSize: 20,
  },
  nameChecked: {},
});

export default CheckBox;
