import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

const Layout: React.FC<ViewProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    //fontFamily: "Sora-Regular",
  },
});

export default Layout;
