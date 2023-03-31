import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { NavProps } from "../components/nav";

type Props = NativeStackScreenProps<NavProps, "Modal"> & any;

const ModalScreen = ({ route, navigation }: Props) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Pressable
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Text>x</Text>
        </Pressable>
        <View style={styles.content}>
          <Text>Modal</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  container: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
  },
  content: {
    padding: 10,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
});

export default ModalScreen;
