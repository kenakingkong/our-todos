import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  GestureResponderEvent,
} from "react-native";

type ListItemProps = {
  isChecked?: boolean;
  name: string;
  onShowOptions: (event: GestureResponderEvent) => void;
};

const ListItem: React.FC<ListItemProps> = ({
  isChecked = false,
  name,
  onShowOptions,
}) => {
  return (
    <Pressable style={styles.container}>
      <Pressable style={styles.box}>
        {isChecked && <View style={styles.boxChecked}></View>}
      </Pressable>
      <Pressable onPress={onShowOptions}>
        <Text style={styles.name}>{name}</Text>
      </Pressable>
    </Pressable>
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

export default ListItem;
