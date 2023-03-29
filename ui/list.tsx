import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { FlatListProps } from "react-native/types";

const List: React.FC<FlatListProps<any>> = (props) => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      {...props}
    />
  );
};

export default List;
