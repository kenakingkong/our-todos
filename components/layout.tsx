import React from "react";
import { Pressable, StyleSheet, Text, View, ViewProps } from "react-native";

const Layout: React.FC<ViewProps> = ({ children }) => {
  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          <Text>logo</Text>
        </Pressable>
        <Text>menu</Text>
      </View>
      {children}
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 48,
    backgroundColor: "#fff",
    //fontFamily: "Sora-Regular",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Layout;
